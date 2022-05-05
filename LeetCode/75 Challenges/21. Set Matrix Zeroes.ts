/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const [n, m] = [matrix.length, matrix[0].length];

  const zeroes: [number, number][] = [];

  for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++) if (matrix[i][j] === 0) zeroes.push([i, j]);

  zeroes.forEach((p) => {
    for (var i = 0; i < n; i++) matrix[i][p[1]] = 0;
    for (var j = 0; j < m; j++) matrix[p[0]][j] = 0;
  });
}

var _matrix: number[][];
_matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(_matrix);
console.log(_matrix);

_matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(_matrix);
console.log(_matrix);
