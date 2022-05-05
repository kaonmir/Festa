function climbStairs(n: number): number {
  const counts = new Array(n + 1);
  counts[0] = counts[1] = 1;
  for (var i = 2; i <= n; i++) counts[i] = counts[i - 1] + counts[i - 2];

  return counts[n];
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3));
