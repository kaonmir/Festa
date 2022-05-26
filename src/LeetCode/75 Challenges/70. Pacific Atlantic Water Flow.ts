import { Point, getFourway } from "./Utility";

function isOceanSame(A: Ocean, B: Ocean) {
  return A.A === B.A && A.P === B.P;
}
function spreadOceanToSameHeight(
  heights: number[][],
  oceans: Ocean[][],
  p: Point
) {
  const [n, m] = [heights.length, heights[0].length];
  const queue: Point[] = [p];

  while (queue.length !== 0) {
    const t = queue.shift();
    if (!t) throw Error("Error");
    const four_ways = getFourway(t, n, m).filter(
      ([x, y]) => heights[x][y] === heights[p[0]][p[1]]
    );
    four_ways.forEach(([x, y]) => {
      if (!isOceanSame(oceans[x][y], oceans[p[0]][p[1]])) queue.push([x, y]);
      oceans[x][y].A = oceans[x][y].A || oceans[p[0]][p[1]].A;
      oceans[x][y].P = oceans[x][y].P || oceans[p[0]][p[1]].P;
    });
  }
}

type Ocean = { P: boolean; A: boolean }; // Pacific for "LU", Atlancic for "RD"}

function pacificAtlantic(heights: number[][]): number[][] {
  const [n, m] = [heights.length, heights[0].length];

  const table: [Point, number][] = heights
    .map((row, x) => row.map((h, y) => [[x, y], h] as [Point, number]))
    .reduce((prev, cur) => [...prev, ...cur], [])
    .sort(([_, A_height], [__, B_height]) => A_height - B_height);

  const oceans: Ocean[][] = new Array(n).fill([]);
  for (var i = 0; i < n; i++) {
    oceans[i] = new Array(m);
    for (var j = 0; j < m; j++) oceans[i][j] = { P: false, A: false };
  }

  table.forEach(([[x, y]]) => {
    var ocean: Ocean = { P: false, A: false };

    ocean.P = getFourway([x, y], n, m)
      .map((p) => oceans[p[0]][p[1]])
      .some(({ P }) => P);
    ocean.A = getFourway([x, y], n, m)
      .map((p) => oceans[p[0]][p[1]])
      .some(({ A }) => A);

    if (x === 0 || y === 0) ocean.P = true;
    if (x === n - 1 || y === m - 1) ocean.A = true;

    if (isOceanSame(oceans[x][y], ocean)) return;
    else {
      oceans[x][y] = ocean;
      spreadOceanToSameHeight(heights, oceans, [x, y]);
    }
  });

  const answer = table
    .filter(([[x, y], _]) => oceans[x][y].P && oceans[x][y].A)
    .map(([p, _]) => p);
  return answer;
}

var _heights: number[][];
_heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
// console.log(pacificAtlantic(_heights)); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

_heights = [
  [2, 1],
  [1, 2],
];
// console.log(pacificAtlantic(_heights)); // [[0,0],[0,1],[1,0],[1,1]]

_heights = [
  [3, 3, 3, 3, 3, 3],
  [3, 0, 3, 3, 0, 3],
  [3, 3, 3, 3, 3, 3],
];
console.log(pacificAtlantic(_heights)); //
