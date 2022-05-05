// 이진 탐색
function search(nums: number[], target: number): number {
  var l = 0;
  var r = nums.length - 1;

  var pivot = nums[0];

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (pivot <= target) {
      if (nums[mid] < pivot || target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (pivot <= nums[mid] || nums[mid] < target) l = mid + 1;
      else r = mid - 1;
    }
  }

  if (nums[l] === target) return l;
  else return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([3, 4, 6, 8, 0, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([1, 3, 5], 1)); // 0
console.log(search([4, 5, 6, 7, 0, 1, 2], 5)); // 1
console.log(search([3, 1], 1)); // 1
