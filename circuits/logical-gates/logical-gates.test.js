import test, { describe } from 'node:test';
import { equal } from 'node:assert';
import { AND, NAND, NOR, NOT, OR, XNOR, XOR } from './logical-gates.js';

describe('logical gates', () => {
  test('NOT(1) to be 0', () => {
    equal(NOT(1), 0);
  });

  test('NOT(1) to be 0', () => {
    equal(NOT(0), 1);
  });

  test('OR([0, 0]) to be 0', () => {
    equal(OR([0, 0]), 0);
  });

  test('OR([0, 1]) to be 1', () => {
    equal(OR([0, 1]), 1);
  });

  test('OR([1, 0]) to be 1', () => {
    equal(OR([1, 0]), 1);
  });

  test('OR([1, 1]) to be 1', () => {
    equal(OR([1, 1]), 1);
  });

  test('NOR([0, 0]) to be 1', () => {
    equal(NOR([0, 0]), 1);
  });

  test('NOR([0, 1]) to be 0', () => {
    equal(NOR([0, 1]), 0);
  });

  test('NOR([1, 0]) to be 0', () => {
    equal(NOR([1, 0]), 0);
  });

  test('NOR([1, 1]) to be 0', () => {
    equal(NOR([1, 1]), 0);
  });

  test('AND([0, 0]) to be 0', () => {
    equal(AND([0, 0]), 0);
  });

  test('AND([0, 1]) to be 0', () => {
    equal(AND([0, 1]), 0);
  });

  test('AND([1, 0]) to be 0', () => {
    equal(AND([1, 0]), 0);
  });

  test('AND([1, 1]) to be 1', () => {
    equal(AND([1, 1]), 1);
  });

  test('NAND([0, 0]) to be 1', () => {
    equal(NAND([0, 0]), 1);
  });

  test('NAND([0, 1]) to be 1', () => {
    equal(NAND([0, 1]), 1);
  });

  test('NAND([1, 0]) to be 1', () => {
    equal(NAND([1, 0]), 1);
  });

  test('NAND([1, 1]) to be 0', () => {
    equal(NAND([1, 1]), 0);
  });

  test('XOR([0, 0]) to be 0', () => {
    equal(XOR([0, 0]), 0);
  });

  test('XOR([0, 1]) to be 1', () => {
    equal(XOR([0, 1]), 1);
  });

  test('XOR([1, 0]) to be 1', () => {
    equal(XOR([1, 0]), 1);
  });

  test('XOR([1, 1]) to be 0', () => {
    equal(XOR([1, 1]), 0);
  });

  test('XNOR([0, 0]) to be 1', () => {
    equal(XNOR([0, 0]), 1);
  });

  test('XNOR([0, 1]) to be 0', () => {
    equal(XNOR([0, 1]), 0);
  });

  test('XNOR([1, 0]) to be 0', () => {
    equal(XNOR([1, 0]), 0);
  });

  test('XNOR([1, 1]) to be 1', () => {
    equal(XNOR([1, 1]), 1);
  });
});
