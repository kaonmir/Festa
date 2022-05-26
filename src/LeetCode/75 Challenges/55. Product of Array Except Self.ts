function productExceptSelf(nums: number[]): number[] {
  const left: number[] = new Array(nums.length).fill(1);
  const right: number[] = new Array(nums.length).fill(1);

  for (var i = 0; i < nums.length; i++) {
    if (i === 0) left[i] = nums[i];
    else left[i] = left[i - 1] * nums[i];
  }
  for (var i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) right[i] = nums[i];
    else right[i] = right[i + 1] * nums[i];
  }

  return nums.map((_, i) => (left[i - 1] ?? 1) * (right[i + 1] ?? 1));
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
