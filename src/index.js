import { fromEvent, map } from 'rxjs';
import { Nor } from './rxjs-circuits/index';
import { Thread } from './rxjs-circuits/thread';

const _set = fromEvent(buttonA, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);
const _reset = fromEvent(buttonB, 'change').pipe(
  map(({ target }) => Number(target.checked)),
);

const thread = Thread();

const nor1 = Nor(_set, thread.subject);
const nor2 = Nor(_reset, nor1);
thread.subscribe(nor2);
nor2.subscribe((i) => console.log(i));
