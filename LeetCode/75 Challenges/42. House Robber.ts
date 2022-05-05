function rob(nums: number[]): number {
  const table: [number, number][] = new Array(nums.length).fill([nums[0], 0]);
  // visited, non-visited

  for (var i = 1; i < nums.length; i++) {
    table[i] = [
      table[i - 1][1] + nums[i],
      Math.max(table[i - 1][0], table[i - 1][1]),
    ];
  }
  return Math.max(table[nums.length - 1][0], table[nums.length - 1][1]);
}

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
