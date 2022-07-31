/**
 * 간선 비용 = 1
 * 최단 시간 복귀
 * 도착에서 뿌리면 된다 (BFS)
 */
function solution(
  n: number,
  roads: [number, number][],
  sources: number[],
  destination: number
) {
  const map = new Map<number, number[]>();
  const answer = new Map<number, number[]>();
  const queue: number[] = [destination];
  const visited: number[] = new Array<number>(n + 1).fill(-1);

  for (const [a, b] of roads) {
    map.set(a, [b].concat(map.get(a) || []));
    map.set(b, [a].concat(map.get(b) || []));
  }

  // 거리는 q에서 다른 곳으로 매겨줘야 한다.
  visited[destination] = 0;
  while (queue.length) {
    const q = queue.shift() as number;
    for (const n of map.get(q) || []) {
      if (visited[n] !== -1) continue;
      visited[n] = visited[q] + 1;
      queue.push(n);
    }
  }

  return sources.map((n) => visited[n]);
}

var _roads: [number, number][];
_roads = [
  [1, 2],
  [2, 3],
];
console.log(solution(3, _roads, [2, 3], 1)); // [1,2]

_roads = [
  [1, 2],
  [1, 4],
  [2, 4],
  [2, 5],
  [4, 5],
];
console.log(solution(5, _roads, [1, 3, 5], 5)); // [2,-1,0]
