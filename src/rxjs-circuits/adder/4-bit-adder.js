import { AND, XOR } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';
import { Thread } from '../thread';
import { And3 } from '../logical-gate/and-3';
import { Nand3 } from '../logical-gate/nand-3';
import { Nand } from '../logical-gate/nand';
import { HalfAdder } from './half-adder';
import { Or } from '../logical-gate/or';
import { FullAdder } from './full-adder';

/**
 * Half-adder
 * @param {rxjs.Observable[]} a
 * @param {rxjs.Observable[]} b
 * @param {rxjs.Observable} carryIn
 *
 * @returns {{
 *  sum: rxjs.Subject
 *  carryOut: rxjs.Subject
 * }}
 */
export function FourBitAdder(a, b, carryIn) {
  const sum0 = FullAdder(a[0], b[0], carryIn);
  const sum1 = FullAdder(a[1], b[1], sum0.carryOut);
  const sum2 = FullAdder(a[2], b[2], sum1.carryOut);
  const sum3 = FullAdder(a[3], b[3], sum2.carryOut);

  return [sum0.sum, sum1.sum, sum2.sum, sum3.sum, sum3.carryOut];
}
