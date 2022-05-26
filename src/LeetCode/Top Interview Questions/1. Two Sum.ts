function twoSum(nums: number[], target: number) {
  let answer: [number, number] = [0, 0];
  nums.forEach((num, idx) => {
    const foundIndex = nums.findIndex((v) => v === target - num);
    if (foundIndex >= 0 && idx !== foundIndex) answer = [foundIndex, idx];
  });

  return answer;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
