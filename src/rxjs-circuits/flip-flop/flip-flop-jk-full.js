import { AND } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
import * as rxjs from 'rxjs';
import { Thread } from '../thread';

/**
 * JK flip-flop
 * @param {Object} obj
 * @param {rxjs.Observable} obj.j
 * @param {rxjs.Observable} obj.k
 * @param {rxjs.Observable} obj.clk clock
 * @param {rxjs.Observable} obj.clr clear
 * @param {rxjs.Observable} obj.pre preset
 * @returns {{
 *  q: rxjs.Subject
 *  _q: rxjs.Subject
 * }}
 * @example https://www.engineersgarage.com/wp-content/uploads/2020/12/JK-flip-flop-ckt.png
 */
export function FlipFlopJKFull({ j, k, clk, clr, pre }) {
  const nand1 = new ReplaySubject(1);
  const nand2 = new ReplaySubject(1);
  const nand3 = new ReplaySubject(1);
  const nand4 = new ReplaySubject(1);
  const thread1 = Thread();
  const thread2 = Thread();

  thread2.subject.subscribe(nand4);
  j.subscribe(nand1);
  clk.subscribe(nand1);

  thread1.subject.subscribe(nand4);
  k.subscribe(nand2);
  clk.subscribe(nand2);

  thread2.subject.subscribe(nand4);
  nand1.subscribe(nand3);
  pre?.subscribe(nand3);

  thread1.subject.subscribe(nand4);
  nand2.subscribe(nand4);
  clr?.subscribe(nand4);

  nand3.subscribe(thread1);
  nand4.subscribe(thread2);

  return {
    q: nand3,
    _q: nand4,
  };
}
