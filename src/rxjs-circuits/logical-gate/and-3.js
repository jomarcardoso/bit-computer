import { AND } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';

/**
 *
 * @param {rxjs.Observable} a
 * @param {rxjs.Observable} b
 */
export function And3(a, b, c) {
  const subject = new ReplaySubject(1);
  let lastA = 0;
  let lastB = 0;
  let lastC = 0;

  a.subscribe((a) => {
    if (a !== lastA) {
      lastA = a;

      subject.next(AND([a, lastB, lastC]));
    }
  });

  b.subscribe((b) => {
    if (b !== lastB) {
      lastB = b;

      subject.next(AND([lastA, b, lastC]));
    }
  });

  c.subscribe((c) => {
    if (c !== lastC) {
      lastB = c;

      subject.next(AND([lastA, lastB, c]));
    }
  });

  return subject;
}
