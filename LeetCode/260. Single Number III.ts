function singleNumber(nums: number[]): number[] {
  const record: Record<number, boolean> = {};
  nums.forEach((num) => {
    if (num in record) delete record[num];
    else record[num] = true;
  });

  return Object.keys(record).map((k) => parseInt(k));
}

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3,5]
console.log(singleNumber([-1, 0])); // [-1,0]
console.log(singleNumber([0, 1])); // [0, 1]
console.log([1, 2, 3, 4]);
