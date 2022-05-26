type T = [number, number];
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return nums[0];

  const table_unv: T[] = new Array(n).fill([0, 0]);
  const table_v: T[] = new Array(n).fill([nums[0], 0]);

  // visited, non-visited

  for (var i = 1; i < n; i++) {
    if (i === 1) {
      table_unv[i] = [nums[1], 0];
      table_v[i] = [-Infinity, nums[0]];
    } else {
      table_unv[i] = [
        table_unv[i - 1][1] + nums[i],
        Math.max(table_unv[i - 1][0], table_unv[i - 1][1]),
      ];
      table_v[i] = [
        table_v[i - 1][1] + nums[i],
        Math.max(table_v[i - 1][0], table_v[i - 1][1]),
      ];
    }
  }

  return Math.max(table_unv[n - 1][0], table_unv[n - 1][1], table_v[n - 1][1]);
}

console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([1, 2, 3])); // 3
