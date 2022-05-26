function hammingWeight(n: number): number {
  var answer = 0;
  while (n !== 0) {
    if (n % 2) answer += 1;
    n = n >>> 1;
  }
  return answer;
}

// -----------------------------------

function solve(s: string) {
  return hammingWeight(parseInt(s, 2));
}

console.log(solve("11111111111111111111111111111101")); // 3
console.log(solve("00000000000000000001000000001011")); // 4
