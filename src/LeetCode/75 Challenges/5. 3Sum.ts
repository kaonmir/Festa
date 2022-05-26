function compare(a: number[], b: number[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function threeSum(nums: number[]): number[][] {
  const positives = nums.filter((v) => v > 0).sort();
  const negatives = nums.filter((v) => v < 0).sort();
  const zeros = nums.filter((v) => v === 0);

  const answer: number[][] = [];

  // 0 zeros
  // - 2 pos, 1 neg
  for (var i = 0; i < positives.length; i++) {
    const a = positives[i];
    for (var j = i + 1; j < positives.length; j++) {
      const b = positives[j];
      if (negatives.includes(-(a + b))) answer.push([a, b, -(a + b)]);
    }
  }

  // - 1 pos 2 neg
  for (var i = 0; i < negatives.length; i++) {
    const a = negatives[i];
    for (var j = i + 1; j < negatives.length; j++) {
      const b = negatives[j];
      if (positives.includes(-(a + b))) answer.push([a, b, -(a + b)]);
    }
  }

  // 1 zeros
  // - 1 pos 1 neg with same abs
  if (zeros.length >= 1)
    positives.forEach((v) => {
      if (negatives.includes(-v)) answer.push([0, -v, v]);
    });

  // 3 zeros
  if (zeros.length >= 3) answer.push([0, 0, 0]);

  // remove duplicates
  return answer.filter((v, i) => answer.findIndex((k) => compare(v, k)) === i);
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
