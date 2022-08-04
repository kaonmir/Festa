const triangular = (n: number) => (n * (n + 1)) / 2;
const pentagonal = (n: number) => (n * (3 * n - 1)) / 2;
const hexagonal = (n: number) => n * (2 * n - 1);

function triPenHex() {
  let a = 286;
  let b = 166;
  let c = 144;

  // t, p, h initial value is useless
  let t = 40755;
  let p = 40744;
  let h = 3;

  while (true) {
    if (t === p && t === h) return t;

    if (t <= p && t <= h) t = triangular(++a);
    else if (p < t && p <= h) p = pentagonal(++b);
    else h = hexagonal(++c);
  }
}

console.log(triPenHex());
