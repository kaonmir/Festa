function goDown(map: number[][], x: number, num: number): number {
  for (var i = 0; i < x; i++) map[x][i] = num++;
  for (var i = x; i >= 0; i--) map[i][x] = num++;
  return num;
}

function goUp(map: number[][], y: number, num: number): number {
  for (var i = 0; i < y; i++) map[i][y] = num++;
  for (var i = y; i >= 0; i--) map[y][i] = num++;
  return num;
}
/**
 *
 * @param n map의 크기
 * @param horizontal 참이면 수평, 거짓이면 수직
 */
function solution(n: number, horizontal: boolean) {
  const map: number[][] = new Array(n);
  for (var i = 0; i < n; i++) map[i] = new Array(n).fill(0);
  var num = 1;
  for (var i = 0; i < n; i++) {
    if (horizontal) num = goDown(map, i, num);
    else num = goUp(map, i, num);
    horizontal = !horizontal;
  }

  return map;
}

console.log(solution(4, true));
console.log(solution(5, false));
