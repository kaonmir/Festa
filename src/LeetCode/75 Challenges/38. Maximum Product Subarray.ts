const _proudctReduce = (answer: number, num: number) => answer * num;

function findLastIndexOf(nums: number[], predict: (value: number) => boolean) {
  for (let i = nums.length - 1; i >= 0; i--) if (predict(nums[i])) return i;
  return -1;
}

function maxProductWithoutZero(nums: number[]): number {
  if (nums.length === 0) return -Infinity;

  var negs = nums.reduce((count, num) => count + (num < 0 ? 1 : 0), 0);
  if (negs % 2 === 0) return nums.reduce(_proudctReduce, 1);

  const startIndex = nums.findIndex((v) => v < 0);
  const endIndex = findLastIndexOf(nums, (v) => v < 0);

  const l = nums.slice(0, endIndex).reduce(_proudctReduce, 1);
  const r = nums.slice(startIndex + 1).reduce(_proudctReduce, 1);

  return Math.max(
    endIndex !== 0 ? l : -Infinity,
    startIndex !== nums.length - 1 ? r : -Infinity
  );
}

function splitArrayByValue(nums: number[], value: number): number[][] {
  const answer: number[][] = [];
  var row: number[] = [];

  nums.forEach((num) => {
    if (num === 0) {
      answer.push(row);
      row = [];
    } else row.push(num);
  });
  answer.push(row);

  return answer;
}

function maxProduct(nums: number[]): number {
  const lists = splitArrayByValue(nums, 0);
  const maxes = lists.map((list) => maxProductWithoutZero(list));
  return Math.max(...maxes, nums[0], lists.length >= 2 ? 0 : -Infinity);
}

// ------------------------------------------------

console.log(maxProduct([2, 3, 0, -9, 3, -4, 0, -4])); // 108
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2, 1])); // 1
console.log(maxProduct([2, 3, -2, 3])); // 6
console.log(maxProduct([-2, 0])); // 0
console.log(maxProduct([-2])); // -2
