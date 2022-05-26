function twoSum(nums: number[], target: number): number[] {
  for (var i = 0; i < nums.length; i++) {
    const idx = nums.slice(i + 1).findIndex((v) => v === target - nums[i]);
    if (idx !== -1) return [i, idx + i + 1];
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
