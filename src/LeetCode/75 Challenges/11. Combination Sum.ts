function combinationSum(candidates: number[], target: number): number[][] {
  const table: number[][][] = [[]]; // [num][list[]]

  // candiates must be ascending order

  for (var value = 1; value <= target; value++) {
    table.push([]);
    candidates.forEach((candidate) => {
      const prev = value - candidate;
      if (prev === 0) table[value].push([candidate]);
      else if (prev > 0) {
        const filtered = table[prev].filter(
          (arr) => arr[arr.length - 1] <= candidate
        );

        table[value].push(...filtered.map((vs) => [...vs, candidate]));
      }
    });
  }

  return table[target];
}

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
console.log(combinationSum([1], 1)); // [[1]]
console.log(combinationSum([1], 2)); // [[1, 1]]
