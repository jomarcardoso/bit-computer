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
