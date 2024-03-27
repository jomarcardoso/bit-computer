export const NOT = (bit = 0) => Number(!bit);
export const OR = (inputs = [0, 0]) => Number(inputs.some((a) => !!a));
export const NOR = (inputs = [0, 0]) => NOT(OR(inputs));
export const AND = (inputs = [0, 0]) => Number(inputs.every((a) => !!a));
export const NAND = (inputs = [0, 0]) => NOT(AND(inputs));
export const XOR = (inputs = [0, 0]) => AND([inputs.OR(), inputs.NAND()]);
export const XNOR = (inputs = [0, 0]) => NOT(XOR(inputs));

Array.prototype.AND = function () {
  return AND(this);
};

Array.prototype.OR = function () {
  return OR(this);
};

Array.prototype.NAND = function () {
  return NAND(this);
};

Array.prototype.XOR = function () {
  return XOR(this);
};

Array.prototype.NOR = function () {
  return Number(!this.OR());
};

Array.prototype.XNOR = function () {
  return Number(!this.XOR());
};
