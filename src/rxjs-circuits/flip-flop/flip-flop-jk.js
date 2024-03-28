import { AND } from '../../circuits/logical-gate/logical-gate';
import { ReplaySubject } from 'rxjs';
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
