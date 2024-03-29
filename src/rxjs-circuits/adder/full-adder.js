import { AND, XOR } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';
import { Thread } from '../thread';
import { And3 } from '../logical-gate/and-3';
import { Nand3 } from '../logical-gate/nand-3';
import { Nand } from '../logical-gate/nand';
import { HalfAdder } from './half-adder';
import { Or } from '../logical-gate/or';

/**
 * Half-adder
 * @param {rxjs.Observable} a
 * @param {rxjs.Observable} b
 * @param {rxjs.Observable} carryIn
 *
 * @returns {{
 *  sum: rxjs.Subject
 *  carryOut: rxjs.Subject
 * }}
 *
 * @example
 * | A | B | Cin | S | Cout |
 * | 0 | 0 | 0   | 0 | 0    |
 * | 0 | 0 | 1   | 1 | 0    |
 * | 0 | 1 | 0   | 1 | 0    |
 * | 0 | 1 | 1   | 0 | 1    |
 * | 1 | 0 | 0   | 1 | 0    |
 * | 1 | 0 | 1   | 0 | 1    |
 * | 1 | 1 | 0   | 0 | 1    |
 * | 1 | 1 | 1   | 1 | 1    |
 */
export function FullAdder(a, b, carryIn) {
  const halfAdder1 = HalfAdder(a, b);
  const halfAdder2 = HalfAdder(halfAdder1.sum, carryIn);
  const carryOut = Or(halfAdder1.carry, halfAdder2.carry);

  return {
    sum: halfAdder2.sum,
    carryOut,
  };
}
