import test, { describe } from 'node:test';
import { equal } from 'node:assert';
import { T_FLIP_FLOP } from './flip-flop.js';

describe('logical gates', () => {
  test('NOT(1) to be 0', () => {
    equal(T_FLIP_FLOP(1), 0);
  });
});
