import assert from 'node:assert/strict';
import test from 'node:test';
import { getOpponentForRound } from './aiOpponents';
import { calculateExpGained, getRequiredExpForLevel } from './formulas';

test('mid-game opponent levels ramp gradually through rounds 5 and 6', () => {
  const expectedLevels: Record<number, number> = {
    1: 1,
    2: 1,
    3: 2,
    4: 4,
    5: 5,
    6: 6,
    7: 8,
    8: 10,
    9: 12,
    10: 14,
    11: 17,
    12: 20,
  };

  for (const [round, expectedLevel] of Object.entries(expectedLevels)) {
    const opponent = getOpponentForRound(Number(round));
    assert.ok(opponent.team.length > 0, `round ${round} should have an opponent team`);
    assert.ok(
      opponent.team.every((pokemon) => pokemon.level === expectedLevel),
      `round ${round} should use level ${expectedLevel} opponents`,
    );
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
