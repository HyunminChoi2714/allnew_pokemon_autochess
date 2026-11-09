import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateAveragePlayerLevel, getOpponentForRound } from './aiOpponents';
import { POKEMON_SPECIES, SHOP_POOL_TIER_BASE, SHOP_POOL_LEGENDARIES } from '../data/pokemonData';
import { MOVES_DATA } from '../data/movesData';
import { calculateExpGained, getRequiredExpForLevel } from './formulas';
import { getCombatTickParticipants, getShopPokemonWeight } from './gameEngine';
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


test('battle EXP uses the same scale as the level-up curve', () => {
  assert.equal(calculateExpGained(150, 5, 5, true, false), 600);
  assert.equal(calculateExpGained(150, 5, 5, true, true), 900);
  assert.equal(calculateExpGained(150, 5, 5, false, false), 300);
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
