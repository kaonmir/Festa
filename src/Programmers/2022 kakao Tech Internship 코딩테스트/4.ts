/*
양방향 그래프
intensity: 가장 긴 간선
산봉우리는 한 곳만, 한 번만 방문 가능
출입구는 한 곳만 방문 가능, 처음과 끝이어야 함
*/

type Candi = {
  isGate: Boolean;
  isSummit: Boolean;
  summit: number;
};

function solution(
  n: number,
  paths: [number, number, number][],
  gates: number[],
  summits: number[]
) {
  paths.sort((A, B) => A[2] - B[2]);

  const candi: Candi[] = [];
  const visit: number[] = new Array<number>(n + 1).fill(-1);

  for (let i = 0; i < paths.length; i++) {
    const [s, e, cost] = paths[i];

    let isSummit = false;
    let isGate = false;
    if (gates.includes(s) || gates.includes(e)) isGate = true;
    if (summits.includes(s) || summits.includes(e)) isSummit = true;

    //

    if (
      (gates.includes(s) && gates.includes(e)) ||
      (summits.includes(s) && summits.includes(e))
    ) {
      //
    } else if (!isSummit) {
      if (visit[s] === -1 && visit[e] === -1) {
        const num = candi.length;
        visit[s] = visit[e] = num;
        candi.push({
          isGate,
          isSummit,
          summit: Infinity,
        });
      } else if (visit[s] === -1) {
        const num = visit[e];
        visit[s] = num;
        candi[num] = {
          isGate: isGate || candi[num].isGate,
          isSummit: isSummit || candi[num].isSummit,
          summit: candi[num].summit,
        };
      } else if (visit[e] === -1) {
        const num = visit[s];
        visit[e] = num;
        candi[num] = {
          isGate: isGate || candi[num].isGate,
          isSummit: isSummit || candi[num].isSummit,
          summit: candi[num].summit,
        };
      } else {
        const [a, b] = [visit[s], visit[e]];

        candi[a] = {
          isGate: candi[a].isGate || candi[b].isGate,
          isSummit: candi[a].isSummit || candi[b].isSummit,
          summit: Math.min(candi[a].summit, candi[b].summit),
        };
        candi[b] = candi[a];
      }
    } else {
      if (summits.includes(s)) {
        if (visit[e] === -1) {
          const num = candi.length;
          visit[e] = num;
          candi.push({
            isGate,
            isSummit: true,
            summit: s,
          });
        } else {
          const num = visit[e];
          candi[num].isSummit = true;
          candi[num].summit = Math.min(candi[num].summit, s);
        }
      } else {
        if (visit[s] === -1) {
          const num = candi.length;
          visit[s] = num;
          candi.push({
            isGate,
            isSummit: true,
            summit: e,
          });
        } else {
          const num = visit[s];
          candi[num].isSummit = true;
          candi[num].summit = Math.min(candi[num].summit, e);
        }
      }
    }

    if (i !== paths.length - 1 && paths[i][2] === paths[i + 1][2]) continue;

    const filtered = candi.filter((v) => v.isGate && v.isSummit);
    if (filtered.length > 0) {
      return [
        filtered.reduce((prev, cur) => Math.min(prev, cur.summit), Infinity),
        cost,
      ];
    }
  }

  const filtered = candi.filter((v) => v.isGate && v.isSummit);
  if (filtered.length > 0) {
    return [
      filtered.reduce((prev, cur) => Math.min(prev, cur.summit), Infinity),
      paths[paths.length - 1][2],
    ];
  }
}

let _temp: [number, number, number][] = [];
_temp = [
  [1, 2, 3],
  [2, 3, 5],
  [2, 4, 2],
  [2, 5, 4],
  [3, 4, 4],
  [4, 5, 3],
  [4, 6, 1],
  [5, 6, 1],
];
console.log(solution(6, _temp, [1, 3], [5])); // [5, 3]

_temp = [
  [1, 4, 4],
  [1, 6, 1],
  [1, 7, 3],
  [2, 5, 2],
  [3, 7, 4],
  [5, 6, 6],
];
console.log(solution(7, _temp, [1], [2, 3, 4])); // [3, 4]

_temp = [
  [1, 2, 5],
  [1, 4, 1],
  [2, 3, 1],
  [2, 6, 7],
  [4, 5, 1],
  [5, 6, 1],
  [6, 7, 1],
];

console.log(solution(7, _temp, [3, 7], [1, 5])); // [5, 1]

_temp = [
  [1, 3, 10],
  [1, 4, 20],
  [2, 3, 4],
  [2, 4, 6],
  [3, 5, 20],
  [4, 5, 6],
];

console.log(solution(5, _temp, [1, 2], [5])); // [5, 6]
