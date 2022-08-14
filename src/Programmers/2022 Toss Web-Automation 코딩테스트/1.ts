// 합
// ["100원"]
// ["1,300원", "2,500원"]
// ["1,234원", "1,234,567원"]

function solution(amounts: string[]) {
  const answer = amounts
    .map((amount) => amount.replace("원", ""))
    .map((amount) => amount.replace(/,/g, ""))
    .reduce((acc: number, cur: string) => parseInt(cur) + acc, 0);
  return answer;
}

console.log(solution(["100원"])); // 100
console.log(solution(["1,300원", "2,500원"])); // 3800
console.log(solution(["1,234원", "1,234,567원"])); // 1235801
