export type Point = [number, number];
export function getFourway(p: Point, n: number, m: number) {
  const ways = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  return ways
    .map(([x, y]) => [p[0] + x, p[1] + y])
    .filter(([x, y]) => 0 <= x && x < n && 0 <= y && y < m);
}
