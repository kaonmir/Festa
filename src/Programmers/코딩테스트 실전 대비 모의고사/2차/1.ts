/**
 * 학생 번호 sum == 0: 삼총사
 * 삼총사 만들 수 있는 방법 수
 */

function solution(numbers: number[]): number {
  var answer = 0;

  for (let a = 0; a < numbers.length; a++)
    for (let b = a + 1; b < numbers.length; b++)
      for (let c = b + 1; c < numbers.length; c++)
        if (numbers[a] + numbers[b] + numbers[c] == 0) answer += 1;
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
