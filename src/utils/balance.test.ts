import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateAveragePlayerLevel, getOpponentForRound } from './aiOpponents';
import { POKEMON_SPECIES, SHOP_POOL_TIER_BASE } from '../data/pokemonData';
import { MOVES_DATA } from '../data/movesData';
import { calculateExpGained, getRequiredExpForLevel } from './formulas';

test('mid-game opponent levels ramp gradually through rounds 5 and 6', () => {
  const expectedLevels: Record<number, number[]> = {
    1: [1],
    2: [1, 1],
    3: [2, 2],
    4: [4, 4],
    5: [5, 5, 5],
    6: [6, 6, 6],
    7: [8, 8, 8, 8],
    8: [10, 10, 10, 10],
    9: [12, 12, 12, 12, 12],
    10: [14, 14, 14, 14, 14, 14],
    11: [17, 17, 17, 17, 17, 17],
    12: [20, 20, 20, 20, 20, 22],
  };

  for (const [round, expectedRoundLevels] of Object.entries(expectedLevels)) {
    const opponent = getOpponentForRound(Number(round));
    const actualLevels = opponent.team.map((pokemon) => pokemon.level).sort((a, b) => a - b);
    assert.deepEqual(
      actualLevels,
      expectedRoundLevels,
      `round ${round} should use the expected opponent levels`,
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
  assert.equal(calculateExpGained(150, 5, 5, true, false), 300);
  assert.equal(calculateExpGained(150, 5, 5, true, true), 450);
  assert.equal(calculateExpGained(150, 5, 5, false, false), 150);
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
