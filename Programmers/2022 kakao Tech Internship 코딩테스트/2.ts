/*
두 개의 큐
서로에게 pop과 insert 가능
두 queue의 합이 같도록
*/

function findAnswer(l: number, r: number, q1: number, q2: number) {
  if (r < q1) {
    // 왼쪽
    const L = l;
    const LL = r - l + 1;
    const RR = q1 - L - LL;
    const R = q2;

    if (RR === 0) return L;
    else return L + L + LL + R;
  } else if (q1 <= l) {
    // 오른쪽
    const L = q1;
    const LL = l - L;
    const RR = r - l + 1;
    const R = q2 - LL - RR;

    if (R === 0) return LL;
    else return L + LL + LL + RR;
  } else {
    // 중간
    const L = l;
    const LL = q1 - L;
    const RR = r + 1 - q1;
    const R = q2 - RR;

    return L + RR;
  }
}

function solution(queue1: number[], queue2: number[]) {
  const len = queue1.length + queue2.length;
  const hap =
    queue1.reduce((p, c) => p + c, 0) + queue2.reduce((p, c) => p + c, 0);
  if (hap % 2 === 1) return -1;
  const target = Math.floor(hap / 2);

  const table = [...queue1, ...queue2];
  let l = 0;
  let r = 0;
  let sum = table[0];

  const candi: [number, number][] = [];
  while (l <= r) {
    if (sum === target) candi.push([l, r]);
    if (sum <= target) {
      if (r === table.length - 1) break;
      r += 1;
      sum += table[r];
    } else {
      sum -= table[l];
      l += 1;
    }
  }

  if (candi.length === 0) return -1;
  return Math.min(
    ...candi.map(([l, r]) => findAnswer(l, r, queue1.length, queue2.length))
  );
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
console.log(solution([1, 2, 3, 4], [])); // 4

console.log(solution([2, 1, 3, 4], [2, 2, 2])); // 1
