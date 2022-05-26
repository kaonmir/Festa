function topKFrequent(nums: number[], k: number): number[] {
  const counts: Record<number, number> = {};
  nums.forEach((num) => {
    if (num in counts) counts[num] += 1;
    else counts[num] = 1;
  });

  return Object.entries(counts)
    .map(([a, b]) => [parseInt(a), b])
    .sort(([_, a], [__, b]) => b - a)
    .slice(0, k)
    .map(([num, _]) => num);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
