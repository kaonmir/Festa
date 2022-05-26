import { getFourway } from "./Utility";
import type { Point } from "./Utility";

function fillIsland(grid: string[][], visited: boolean[][], p: Point) {
  const [n, m] = [grid.length, grid[0].length];
  const queue: Point[] = [p];
  visited[p[0]][p[1]] = true;

  while (queue.length !== 0) {
    getFourway(queue.shift()!, n, m)
      .filter(([x, y]) => grid[x][y] === "1" && !visited[x][y])
      .forEach(([x, y]) => {
        visited[x][y] = true;
        queue.push([x, y]);
      });
  }
}

function numIslands(grid: string[][]): number {
  const [n, m] = [grid.length, grid[0].length];
  const visited: boolean[][] = new Array(n);
  var answer = 0;

  for (var i = 0; i < n; i++) visited[i] = new Array(m).fill(false);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (grid[i][j] !== "1" || visited[i][j]) continue;
      fillIsland(grid, visited, [i, j]);
      answer += 1;
    }
  }

  return answer;
}

var _grid: string[][];
_grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(_grid)); // 1

_grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(_grid)); // 3
