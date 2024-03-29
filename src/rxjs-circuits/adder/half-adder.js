import { AND, XOR } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';
import { Thread } from '../thread';
import { And3 } from '../logical-gate/and-3';
import { Nand3 } from '../logical-gate/nand-3';
import { Nand } from '../logical-gate/nand';

/**
 * Half-adder
 * @param {rxjs.Observable} a
 * @param {rxjs.Observable} b
 *
 * @returns {{
 *  sum: rxjs.Subject
 *  carry: rxjs.Subject
 * }}
 *
 * @example
 * | A | B | S | C |
 * | 0 | 0 | 0 | 0 |
 * | 0 | 1 | 1 | 0 |
 * | 1 | 0 | 1 | 0 |
 * | 1 | 1 | 0 | 1 |
 */
export function HalfAdder(a, b) {
  const sum = new ReplaySubject(1);
  const carry = new ReplaySubject(1);
  ('');
  let lastA = 0;
  let lastB = 0;

  a.subscribe((a) => {
    if (a !== lastA) {
      lastA = a;

      sum.next(XOR([a, lastB]));
      carry.next(AND([a, lastB]));
    }
  });

  b.subscribe((b) => {
    if (b !== lastB) {
      lastB = b;

      sum.next(XOR([lastA, b]));
      carry.next(AND([lastA, b]));
    }
  });

  return {
    sum,
    carry,
  };
}
