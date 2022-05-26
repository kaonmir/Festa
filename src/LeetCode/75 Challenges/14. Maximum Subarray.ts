function maxSubArray(nums: number[]): number {
  var curr = nums[0];
  var max = nums[0];

  for (var i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(curr, max);
  }
  return max;
}
