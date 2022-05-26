function canJump(nums: number[]): boolean {
  const queue: number[] = [];
  const visited: boolean[] = new Array(nums.length).fill(false);

  queue.push(0);
  visited[0] = true;
  while (queue.length !== 0) {
    const x = queue.shift()!;
    for (var idx = x + 1; idx <= x + nums[x] && idx < nums.length; idx++) {
      if (visited[idx] === false) {
        visited[idx] = true;
        queue.push(idx);
      }
    }
  }

  return visited[nums.length - 1];
}

console.log(canJump([1, 2])); // true
console.log(canJump([1, 1, 4])); // true
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([2, 3, 1, 4, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
