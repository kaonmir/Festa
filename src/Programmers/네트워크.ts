// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 네트워크

function propagateNetwork(computers: number[][], visit: Boolean[], k: number) {
  const queue: number[] = [k];

  while (queue.length !== 0) {
    const t = queue.pop() as number;
    visit[t] = true;
    const unVisited = computers[t]
      .map((v, idx) => [v, idx])
      .filter(([v, idx]) => v === 1 && !visit[idx])
      .map(([_, idx]) => idx);

    queue.unshift(...unVisited);
  }
}

function solution(n: number, computers: number[][]) {
  let answer = 0;
  const visit = new Array<Boolean>(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (visit[i]) continue;

    propagateNetwork(computers, visit, i);
    answer += 1;
  }

  return answer;
}

let _temp = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(solution(3, _temp)); // 2

_temp = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
console.log(solution(3, _temp)); // 1
