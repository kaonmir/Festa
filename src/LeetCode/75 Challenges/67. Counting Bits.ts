function countBits(n: number): number[] {
  const answer: number[] = [];
  for (var num = 0; num <= n; num++) {
    const k = num
      .toString(2)
      .split("")
      .reduce((prev, cur) => prev + (cur === "1" ? 1 : 0), 0);
    answer.push(k);
  }
  return answer;
}

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]
