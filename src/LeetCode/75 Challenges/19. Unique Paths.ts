function uniquePaths(m: number, n: number): number {
  const table: number[][] = new Array(n);
  for (var i = 0; i < n; i++) table[i] = new Array(m).fill(1);

  for (var i = 0; i < n; i++) {
    if (i === 0) continue;
    for (var j = 0; j < m; j++) {
      if (j === 0) continue;
      table[i][j] = table[i - 1][j] + table[i][j - 1];
    }
  }
  return table[n - 1][m - 1];
}

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(3, 3)); // 6
