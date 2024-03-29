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
