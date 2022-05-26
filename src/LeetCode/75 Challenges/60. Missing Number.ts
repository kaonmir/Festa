function missingNumber(nums: number[]): number {
  const n = nums.length;
  const hap = (n * (n + 1)) / 2;

  return hap - nums.reduce((prev, cur) => prev + cur, 0);
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
