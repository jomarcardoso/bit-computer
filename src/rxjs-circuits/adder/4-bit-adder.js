import * as rxjs from 'rxjs';
import { FullAdder } from './full-adder';

/**
 * Half-adder
 * @param {rxjs.Observable[]} a
 * @param {rxjs.Observable[]} b
 * @param {rxjs.Observable} carryIn
 *
 * @returns {{
 *  sum: rxjs.Subject
 *  carryOut: rxjs.Subject
 * }}
 */
export function FourBitAdder(a, b, carryIn) {
  const sum0 = FullAdder(a[0], b[0], carryIn);
  const sum1 = FullAdder(a[1], b[1], sum0.carryOut);
  const sum2 = FullAdder(a[2], b[2], sum1.carryOut);
  const sum3 = FullAdder(a[3], b[3], sum2.carryOut);

  return [sum0.sum, sum1.sum, sum2.sum, sum3.sum, sum3.carryOut];
}

/*
import { fromEvent, map } from 'rxjs';
import { FourBitAdder } from './rxjs-circuits/adder/4-bit-adder';

const a = fromEvent(buttonA, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const b = fromEvent(buttonB, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const c = fromEvent(buttonC, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const d = fromEvent(buttonD, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

const a2 = fromEvent(buttonA2, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const b2 = fromEvent(buttonB2, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const c2 = fromEvent(buttonC2, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const d2 = fromEvent(buttonD2, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const carryIn = fromEvent(buttonCarry, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

let last0 = 0;
let last1 = 0;
let last2 = 0;
let last3 = 0;

FourBitAdder([a, b, c, d], [a2, b2, c2, d2], carryIn)[0].subscribe((sum) => {
  last0 = sum;

  console.log(last0, last1, last2, last3);
});

FourBitAdder([a, b, c, d], [a2, b2, c2, d2], carryIn)[1].subscribe((sum) => {
  last1 = sum;

  console.log(last0, last1, last2, last3);
});

FourBitAdder([a, b, c, d], [a2, b2, c2, d2], carryIn)[2].subscribe((sum) => {
  last2 = sum;

  console.log(last0, last1, last2, last3);
});

FourBitAdder([a, b, c, d], [a2, b2, c2, d2], carryIn)[3].subscribe((sum) => {
  last3 = sum;

  console.log(last0, last1, last2, last3);
});

<label>
    <input type="checkbox" id="buttonA">button a
  </label>
  <label>
    <input type="checkbox" id="buttonB">button b
  </label>
  <label>
    <input type="checkbox" id="buttonC">button c
  </label>
  <label>
    <input type="checkbox" id="buttonD">button d
  </label>
  <br>
  <label>
    <input type="checkbox" id="buttonA2">button a2
  </label>
  <label>
    <input type="checkbox" id="buttonB2">button b2
  </label>
  <label>
    <input type="checkbox" id="buttonC2">button c2
  </label>
  <label>
    <input type="checkbox" id="buttonD2">button d2
  </label>
  <label>
    <input type="checkbox" id="buttonCarry">button carry
  </label>

*/
