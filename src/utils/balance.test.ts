import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateAveragePlayerLevel, getOpponentForRound } from './aiOpponents';
import { POKEMON_SPECIES, SHOP_POOL_TIER_BASE, SHOP_POOL_LEGENDARIES } from '../data/pokemonData';
import { MOVES_DATA } from '../data/movesData';
import { calculateExpGained, getRequiredExpForLevel } from './formulas';
import {
  getCombatTickParticipants,
  getShopPokemonWeight,
  grantExperienceToParticipants,
  instantiatePokemon,
} from './gameEngine';
import type { ActivePokemon } from '../types/game';

test('mid-game opponent levels ramp gradually through rounds 5 and 6', () => {
  const expectedTeamSizes: Record<number, number> = {
    1: 1,
    2: 2,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 4,
    8: 4,
    9: 5,
    10: 6,
    11: 6,
    12: 6,
  };

  for (const [round, expectedSize] of Object.entries(expectedTeamSizes)) {
    const opponent = getOpponentForRound(Number(round), 1);
    assert.equal(opponent.team.length, expectedSize, `round ${round} should keep its intended team size`);
    assert.ok(
      opponent.team.every((pokemon) => {
        const isFinalBossAce = Number(round) === 12 && pokemon.speciesId === 'mewtwo';
        return pokemon.level === (isFinalBossAce ? 2 : 1);
      }),
      `round ${round} should scale to the supplied average level`,
    );
  }
});


test('opponent levels track the average level of the owned team in every round', () => {
  assert.equal(calculateAveragePlayerLevel([]), 1);
  assert.equal(calculateAveragePlayerLevel([2, 4, 6]), 4);
  assert.equal(calculateAveragePlayerLevel([2, 4, 6, Number.NaN]), 4);

  for (const averageLevel of [1, 2.5, 8, 24, 99]) {
    const expected = Math.max(1, Math.min(100, Math.round(averageLevel)));
    for (const round of [1, 5, 6, 12, 13, 20]) {
      const opponent = getOpponentForRound(round, averageLevel);
      const levels = opponent.team.map((pokemon) => pokemon.level);
      assert.ok(levels.every((level) => level === expected || level === Math.min(100, expected + 1)));
      const teamAverage = levels.reduce((sum, level) => sum + level, 0) / levels.length;
      assert.ok(Math.abs(teamAverage - averageLevel) <= 1.1);
    }
  }
});

test('second- and third-generation additions are available and evolution-ready', () => {
  const addedIds = [
    'bayleef','meganium','quilava','typhlosion','croconaw','feraligatr',
    'mareep','flaaffy','ampharos','wooper','quagsire','houndour','houndoom',
    'phanpy','donphan','larvitar','pupitar',
    'grovyle','sceptile','combusken','blaziken','marshtomp','swampert',
    'ralts','kirlia','shroomish','breloom','aron','lairon','aggron',
    'trapinch','vibrava','flygon','bagon','shelgon','beldum','metang',
  ];

  for (const id of addedIds) {
    const species = POKEMON_SPECIES[id];
    assert.ok(species, `missing added species: ${id}`);
    assert.ok(species.pokedexNumber >= 152 && species.pokedexNumber <= 386);
    assert.ok(species.possibleMoves.length > 0);
    for (const move of species.possibleMoves) {
      assert.ok(MOVES_DATA[move.moveId], `${id} references missing move ${move.moveId}`);
    }
    if (species.evolvesTo) {
      assert.ok(POKEMON_SPECIES[species.evolvesTo], `${id} evolves to a missing species`);
    }
  }

  for (const [id,next] of [
    ['chikorita','bayleef'],['cyndaquil','quilava'],['totodile','croconaw'],
    ['treecko','grovyle'],['torchic','combusken'],['mudkip','marshtomp'],
    ['pupitar','tyranitar'],['shelgon','salamence'],['metang','metagross'],
  ]) {
    assert.equal(POKEMON_SPECIES[id].evolvesTo, next);
  }

  for (const id of ['mareep','wooper','houndour','phanpy','larvitar','ralts','shroomish','aron','trapinch','bagon','beldum']) {
    assert.ok(SHOP_POOL_TIER_BASE.includes(id), `${id} should appear in the normal shop pool`);
  }
});


test('battle EXP is faster and remains consistent with the level-up curve', () => {
  assert.equal(calculateExpGained(150, 5, 5, true, false), 1200);
  assert.equal(calculateExpGained(150, 5, 5, true, true), 1800);
  assert.equal(calculateExpGained(150, 5, 5, false, false), 600);
  assert.equal(getRequiredExpForLevel(1), 70);
  assert.equal(getRequiredExpForLevel(2), 166);
});

test('every deployed player Pokemon receives EXP when an enemy is defeated', () => {
  const first = instantiatePokemon('pikachu', 'player');
  const second = instantiatePokemon('bulbasaur', 'player');
  const fainted = instantiatePokemon('squirtle', 'player');
  fainted.currentHp = 0;
  const benchOnly = instantiatePokemon('charmander', 'player');
  const enemy = instantiatePokemon('pidgey', 'enemy');
  const participants = new Set([first.instanceId, second.instanceId, fainted.instanceId]);

  const awards = grantExperienceToParticipants(
    [first, second, fainted, benchOnly],
    participants,
    enemy.speciesId,
    enemy.level,
  );

  assert.equal(awards.length, 3);
  assert.ok(first.exp > 0 || first.level > 1);
  assert.ok(second.exp > 0 || second.level > 1);
  assert.ok(fainted.exp > 0 || fainted.level > 1);
  assert.equal(fainted.currentHp, 0, 'a fainted participant must not be revived by EXP');
  assert.equal(benchOnly.exp, 0);
  assert.equal(benchOnly.level, 1);
  assert.ok(awards.every((award) => award.expGained > 0));
});


test('all National Pokedex entries from generations 4 and 5 are present and shop-accessible', () => {
  for (let dex = 387; dex <= 649; dex += 1) {
    const species = Object.values(POKEMON_SPECIES).find((pokemon) => pokemon.pokedexNumber === dex);
    assert.ok(species, `missing Gen 4/5 species at National Pokedex #${dex}`);
    assert.ok(species.possibleMoves.length > 0, `${species.id} should have at least one move`);
    for (const move of species.possibleMoves) {
      assert.ok(MOVES_DATA[move.moveId], `${species.id} references missing move ${move.moveId}`);
    }
    const shopPool = species.isLegendary ? SHOP_POOL_LEGENDARIES : SHOP_POOL_TIER_BASE;
    assert.ok(shopPool.includes(species.id), `${species.id} should be available in the appropriate shop pool`);
  }
});

test('owned Pokemon receive a higher shop selection weight', () => {
  const baseWeight = getShopPokemonWeight('gible', []);
  const oneOwnedWeight = getShopPokemonWeight('gible', ['gible']);
  const twoOwnedWeight = getShopPokemonWeight('gible', ['gible', 'gible']);
  assert.ok(baseWeight > 0);
  assert.equal(oneOwnedWeight, baseWeight * 4);
  assert.ok(twoOwnedWeight > oneOwnedWeight);
});

test('all units alive at the start of a combat tick remain action participants', () => {
  const units = [
    { instanceId: 'player-1', currentHp: 50 },
    { instanceId: 'player-2', currentHp: 20 },
    { instanceId: 'enemy-1', currentHp: 40 },
    { instanceId: 'enemy-2', currentHp: 0 },
  ];
  const participants = getCombatTickParticipants(units);
  assert.deepEqual([...participants], ['player-1', 'player-2', 'enemy-1']);

  // The action set is frozen: damage during this tick cannot cancel a queued action.
  units[0].currentHp = 0;
  units[1].currentHp = 0;
  assert.ok(participants.has('player-1'));
  assert.ok(participants.has('player-2'));
});


test('level-up requirements increase and preserve the level cap', () => {
  for (let level = 1; level < 99; level += 1) {
    assert.ok(
      getRequiredExpForLevel(level + 1) > getRequiredExpForLevel(level),
      `XP requirement should increase after level ${level}`,
    );
  }
  assert.equal(getRequiredExpForLevel(100), Infinity);
});
