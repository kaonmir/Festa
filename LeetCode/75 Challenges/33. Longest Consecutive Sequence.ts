function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  nums = nums.sort((A, B) => A - B);
  var answer = 1;
  var count = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) count += 1;
    else if (nums[i] - nums[i - 1] === 0) continue;
    else {
      answer = Math.max(answer, count);
      count = 1;
    }
  }

  return Math.max(answer, count);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
