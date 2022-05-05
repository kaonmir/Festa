function maxArea(height: number[]): number {
  var answer = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    answer = Math.max(answer, area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return answer;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 2, 1])); // 2
console.log(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7])); // 200
