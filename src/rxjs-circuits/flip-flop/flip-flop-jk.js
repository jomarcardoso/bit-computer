import * as rxjs from 'rxjs';
import { Thread } from '../thread';
import { And3 } from '../logical-gate/and-3';
import { Nand3 } from '../logical-gate/nand-3';
import { Nand } from '../logical-gate/nand';

/**
 * JK flip-flop
 * @param {Object} obj
 * @param {rxjs.Observable} obj.j
 * @param {rxjs.Observable} obj.k
 * @param {rxjs.Observable} obj.clk clock
 * @returns {{
 *  q: rxjs.Subject
 *  _q: rxjs.Subject
 * }}
 * @example https://www.engineersgarage.com/wp-content/uploads/2020/12/JK-flip-flop-ckt.png
 */
export function FlipFlopJK({ j, k, clk }) {
  const thread1 = Thread();
  const thread2 = Thread();

  const nand1 = Nand3(j, clk, thread2.subject);
  const nand2 = Nand3(k, clk, thread1.subject);

  const q = Nand(nand1, thread2.subject);
  const _q = Nand(nand2, thread1.subject);

  thread1.subscribe(q);
  thread2.subscribe(_q);

  return {
    q,
    _q,
  };
}

/*

import { fromEvent, map } from 'rxjs';
import { And } from './rxjs-circuits/index';
import { FlipFlopJK } from './rxjs-circuits/flip-flop/flip-flop-jk';

const j = fromEvent(buttonJ, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const clk = fromEvent(buttonClk, 'click').pipe(map(() => 0));
const k = fromEvent(buttonK, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

const flipFlopJK0 = FlipFlopJK({
  j,
  clk,
  k,
});

const flipFlopJK1 = FlipFlopJK({
  j: flipFlopJK0.q,
  clk,
  k: flipFlopJK0.q,
});

const and1 = And(flipFlopJK0.q, flipFlopJK1.q);

const flipFlopJK2 = FlipFlopJK({
  j: and1,
  clk,
  k: and1,
});

const and2 = And(and1, flipFlopJK2.q);

const flipFlopJK3 = FlipFlopJK({
  j: and2,
  clk,
  k: and2,
});

flipFlopJK0.q.subscribe((i) => console.log('q0', i));
flipFlopJK1.q.subscribe((i) => console.log('q1', i));
flipFlopJK2.q.subscribe((i) => console.log('q2', i));
flipFlopJK3.q.subscribe((i) => console.log('q3', i));
*/
