import { NOR } from '../logical-gate/index.js';

export const T_FLIP_FLOP = () => {
  let carry = 0;

  function run(toggle = 0, clock = 0, finish = false) {
    const a = NOR([toggle, carry]);
    const q = NOR([clock, a]);

    carry = q;

    if (!finish) {
      return run(toggle, clock, true);
    }

    return q;
  }

  return run;
};
