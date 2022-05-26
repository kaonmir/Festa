function lengthOfLIS(nums: number[]): number {
  const counts: Record<number, number> = { 1: nums[0] };

  for (var i = 1; i < nums.length; i++) {
    const val = nums[i];

    const sortedKeys = Object.keys(counts)
      .map((v) => parseInt(v))
      .sort((A, B) => B - A);

    sortedKeys.forEach((key) => {
      if (counts[key] < val) {
        if (key + 1 in counts) counts[key + 1] = Math.min(counts[key + 1], val);
        else counts[key + 1] = val;
      }
      if (key === 1) counts[key] = Math.min(counts[key], val);
    });
  }

  return Math.max(...Object.keys(counts).map((v) => parseInt(v)));
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
