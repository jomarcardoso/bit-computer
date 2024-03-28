import { AND, NAND } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';

/**
 *
 * @param {rxjs.Observable} a
 * @param {rxjs.Observable} b
 */
export function Nand3(a, b, c) {
  const subject = new ReplaySubject(1);
  let lastA = 0;
  let lastB = 0;
  let lastC = 0;

  a.subscribe((a) => {
    if (a !== lastA) {
      lastA = a;

      subject.next(NAND([a, lastB, lastC]));
    }
  });

  b.subscribe((b) => {
    if (b !== lastB) {
      lastB = b;

      subject.next(NAND([lastA, b, lastC]));
    }
  });

  c.subscribe((c) => {
    if (c !== lastC) {
      lastC = c;

      subject.next(NAND([lastA, lastB, c]));
    }
  });

  return subject;
}
