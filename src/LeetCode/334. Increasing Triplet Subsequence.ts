function increasingTriplet(nums: number[]): boolean {
  const counts: [number, number, number] = [Infinity, Infinity, Infinity]; // minimum number for each triplet

  for (var i = 0; i < nums.length; i++) {
    if (i >= 2 && counts[1] < nums[i]) counts[2] = Math.min(counts[2], nums[i]);
    if (i >= 1 && counts[0] < nums[i]) counts[1] = Math.min(counts[1], nums[i]);
    counts[0] = Math.min(counts[0], nums[i]);
  }

  return counts[2] !== Infinity;
}

increasingTriplet([1, 2, 3, 4, 5]);
increasingTriplet([5, 4, 3, 2, 1]);
increasingTriplet([2, 1, 5, 0, 4, 6]);
