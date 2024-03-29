import { OR } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';

/**
 *
 * @param {rxjs.Observable} a
 * @param {rxjs.Observable} b
 */
export function Or(a, b) {
  const subject = new ReplaySubject(1);
  let lastA = 0;
  let lastB = 0;
  let lastEmmited = 0;

  a.subscribe((a) => {
    if (a !== lastA) {
      lastA = a;

      const newEmit = OR([a, lastB]);

      if (newEmit !== lastEmmited) {
        lastEmmited = newEmit;
        subject.next(newEmit);
      }
    }
  });

  b.subscribe((b) => {
    if (b !== lastB) {
      lastB = b;

      const newEmit = OR([lastA, b]);

      if (newEmit !== lastEmmited) {
        lastEmmited = newEmit;
        subject.next(newEmit);
      }
    }
  });

  return subject;
}
