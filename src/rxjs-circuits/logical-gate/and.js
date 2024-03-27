import { AND } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';

/**
 *
 * @param {rxjs.Observable} a
 * @param {rxjs.Observable} b
 */
export function And(a, b) {
  const subject = new ReplaySubject(1);
  let lastA = 0;
  let lastB = 0;

  a.subscribe((a) => {
    if (a !== lastA) {
      lastA = a;

      subject.next(AND([a, lastB]));
    }
  });

  b.subscribe((b) => {
    if (b !== lastB) {
      lastB = b;

      subject.next(AND([lastA, b]));
    }
  });

  return subject;
}
