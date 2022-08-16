type AndO = {a: number; b: string} & {a: number; b: string; c: bigint};
type OrO = {a: number; b: string} | {a: string; b: boolean};

const andO: AndO = {
  a: 1,
  b: "ad",
  c: 1n,
};
