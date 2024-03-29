import { fromEvent, map } from 'rxjs';
import { SevenSegmentDisplay } from './rxjs-circuits/displays/sevent-segment-display';

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

const e = fromEvent(buttonE, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

const f = fromEvent(buttonF, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

const g = fromEvent(buttonG, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

const dp = fromEvent(buttonDP, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

SevenSegmentDisplay(a, b, c, d, e, f, g, dp);
SevenSegmentDisplay(a, b, c, d, e, f, g, dp);
