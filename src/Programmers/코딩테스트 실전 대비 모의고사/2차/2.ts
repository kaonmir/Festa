/**
 * 토핑 일렬로, 동일한 가짓수로 분배
 */
function solution(topping: number[]): number {
  var answer = 0;
  const leftTopping = new Map<number, number>();
  const rightTopping = new Map<number, number>();

  for (const t of topping) rightTopping.set(t, (rightTopping.get(t) || 0) + 1);

  for (const t of topping) {
    leftTopping.set(t, (leftTopping.get(t) || 0) + 1);
    rightTopping.set(t, (rightTopping.get(t) || 0) - 1);
    if (rightTopping.has(t) && rightTopping.get(t) == 0) rightTopping.delete(t);
    if (leftTopping.size == rightTopping.size) answer += 1;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
