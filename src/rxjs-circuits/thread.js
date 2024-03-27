import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';

/**
 *
 * @param {rxjs.Observable} a
 */
export function Thread() {
  const subject = new ReplaySubject(1);
  let lastA = 0;
  let lastEmmited = 0;

  function subscribe(a) {
    a.subscribe((a) => {
      if (a !== lastA) {
        lastA = a;

        if (a !== lastEmmited) {
          lastEmmited = a;
          subject.next(a);
        }
      }
    });
  }

  return {
    subscribe,
    subject,
  };
}
