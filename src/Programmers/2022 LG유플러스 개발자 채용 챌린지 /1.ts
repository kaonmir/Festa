function solution(arr: number[]) {
  const groups: string[] = [];

  for (const num of arr) {
    const word = num.toString();
    const sortedWord = word.split("").sort().join("");
    groups.some((group) => group === sortedWord)
      ? null
      : groups.push(sortedWord);
  }

  return groups.length;
}

console.log(solution([123, 234, 213, 432, 234, 1234, 2341, 12345, 324])); // 4
console.log(solution([1, 2, 3, 1, 2, 3, 4])); // 4
console.log(solution([123, 456, 789, 321, 654, 987])); // 3
