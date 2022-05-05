function findMin(nums: number[]): number {
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  const pivot = nums[0];

  var l = 0;
  var r = nums.length - 1;

  while (l < r) {
    if (r - l === 1) return Math.min(nums[l], nums[r]);
    const mid = Math.floor((l + r) / 2);
    if (pivot < nums[mid]) l = mid + 1;
    else r = mid;
  }

  return nums[l];
}

console.log(findMin([2, 1])); // 1

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11
