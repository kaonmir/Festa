// ! DO NOT allocate another 2D matrix and do the rotation.

type T = [number, number];
function moveCell(matrix: number[][], s: T, d: T) {
  matrix[d[0]][d[1]] = matrix[s[0]][s[1]];
}
// LU, RU, RD, LD
function _rotate(matrix: number[][], [x, y]: T) {
  const [n, m] = [matrix.length, matrix[0].length];
  const [lu, ru, rd, ld]: [T, T, T, T] = [
    [x, y],
    [y, m - x - 1],
    [n - x - 1, m - y - 1],
    [n - y - 1, x],
  ];

  const temp = matrix[lu[0]][lu[1]];
  moveCell(matrix, ld, lu); // ld -> lu
  moveCell(matrix, rd, ld); // rd -> ld
  moveCell(matrix, ru, rd); // ru -> rd
  matrix[ru[0]][ru[1]] = temp;
}

function rotate(matrix: number[][]): void {
  const [n, m] = [matrix.length, matrix[0].length];
  for (var i = 0; i < Math.ceil(n / 2); i++)
    for (var j = 0; j < Math.floor(m / 2); j++) _rotate(matrix, [i, j]);
}

var _matrix: number[][];
_matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(_matrix); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(_matrix);

_matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(_matrix); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
console.log(_matrix);
