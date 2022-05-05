// 1: A가 밖, -1: B가 밖, 0: 아무 사이 아님
function compareCircle(
  A: [number, number, number],
  B: [number, number, number]
) {
  const [Ax, Ay, Ar] = A;
  const [Bx, By, Br] = B;
  const d = Math.sqrt(Math.pow(Ax - Bx, 2) + Math.pow(Ay - By, 2));
  if (Br > d + Ar) return -1;
  else if (Ar > d + Br) return 1;
  else return 0;
}

function getDepth(map: number[][], root: number): number {
  const stack = [];
}

function solution(circles: [number, number, number][]) {
  const map: number[][] = new Array(circles.length);
  for (var i = 0; i < map.length; i++) map[i] = new Array();
  circles.forEach((circleA, i) => {
    for (var j = i + 1; j < circles.length; j++) {
      const circleB = circles[j];
      const result = compareCircle(circleA, circleB);
      if (result === 1) map[i].push(j);
      else if (result === -1) map[j].push(i);
    }
  });

  const init = [];
  for (var i = 0; i < map.length; i++) if (map[i].length === 0) init.push(i);
  return Math.max(...init.map((k) => getDepth(map, k)));
}

// x, y, r
var _circles: [number, number, number][];

_circles = [
  [-4, 0, 2],
  [-4, 0, 4],
  [-4, 0, 6],
  [2, 0, 8],
];

console.log(solution(_circles)); // 3
