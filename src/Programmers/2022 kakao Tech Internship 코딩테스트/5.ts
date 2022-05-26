//
/*
Rotate: 시계방향
Unshift: 한 칸씩 밑으로
*/

var shift = (matrix: number[][], k: number) => {
  const l = matrix.length;
  k = k % matrix.length;
  return [...matrix.slice(l - k), ...matrix.slice(0, l - k)];
};

// k <= n && k <= m
var rotateT = (matrix: number[][], k: number) => {
  if (k === 0) return;
  const temp = matrix[0].slice(0, k);
  const [n, m] = [matrix.length, matrix[0].length];

  for (let i = 1; i <= k; i++) matrix[0][k - i] = matrix[i][0]; // 왼쪽 위 코너
  for (let i = 0; i + k < n; i++) matrix[i][0] = matrix[i + k][0]; // 왼쪽

  for (let i = 1; i <= k; i++) matrix[n - k + i - 1][0] = matrix[n - 1][i]; // 왼쪽 아래 코너
  for (let i = 0; i + k < m; i++) matrix[n - 1][i] = matrix[n - 1][i + k]; // 아래

  for (let i = 1; i <= k; i++)
    matrix[n - 1][m - k + i - 1] = matrix[n - i - 1][m - 1]; // 오른쪽 아래 코너
  for (let i = n - 1; i - k >= 0; i--) matrix[i][m - 1] = matrix[i - k][m - 1]; // 오른쪽

  for (let i = 1; i <= k; i++) matrix[i][m - 1] = matrix[0][m - k + i - 1]; // 오른쪽 위
  for (let i = m - 1; i - k >= 0; i--) matrix[0][i] = matrix[0][i - k]; // 위

  for (let i = 0; i < k; i++) matrix[0][i + k] = temp[i];
};

var rotate = (matrix: number[][]) => {
  const temp = matrix[0][0];
  const [n, m] = [matrix.length, matrix[0].length];

  for (let i = 1; i < n; i++) matrix[i - 1][0] = matrix[i][0]; // 왼쪽
  for (let i = 1; i < m; i++) matrix[n - 1][i - 1] = matrix[n - 1][i]; // 아래
  for (let i = n - 2; i >= 0; i--) matrix[i + 1][m - 1] = matrix[i][m - 1]; // 오른쪽
  for (let i = m - 2; i >= 0; i--) matrix[0][i + 1] = matrix[0][i]; // 위
  matrix[0][1] = temp;
};

function solution(matrix: number[][], operations: string[]) {
  const ops: [string, number][] = [[operations[0], 1]];
  for (let i = 1; i < operations.length; i++) {
    if (ops[ops.length - 1][0] === operations[i]) ops[ops.length - 1][1] += 1;
    else ops.push([operations[i], 1]);
  }

  const [n, m] = [matrix.length, matrix[0].length];
  const T = Math.min(n, m);
  ops.forEach(([operation, k]) => {
    if (operation === "Rotate") {
      for (let i = 0; i < Math.floor(k / T); i++) rotateT(matrix, T);
      rotateT(matrix, k % T);
    } else matrix = shift(matrix, k);
  });
  return matrix;
}

let _temp: number[][] = [];

_temp = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(solution(_temp, ["Rotate", "ShiftRow"])); // [[8, 9, 6], [4, 1, 2], [7, 5, 3]]

_temp = [
  [8, 6, 3],
  [3, 3, 7],
  [8, 4, 9],
];
console.log(solution(_temp, ["Rotate", "ShiftRow", "ShiftRow"])); // [[8, 3, 3], [4, 9, 7], [3, 8, 6]]

_temp = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(solution(_temp, ["ShiftRow", "Rotate", "ShiftRow", "Rotate"])); // [[1, 6, 7 ,8], [5, 9, 10, 4], [2, 3, 12, 11]]
