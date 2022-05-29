// 코딩테스트 연습 > 2020 카카오 인턴십 > 경주로 건설

type Point = {
  x: number;
  y: number;
};

type Table = {
  up: number;
  down: number;
  left: number;
  right: number;
};

const STRAIGHT = 100;
const CORNER = 500;

function solution(board: number[][]) {
  const n = board.length;
  const queue: Point[] = [{x: 0, y: 0}];
  const table: Table[][] = new Array<Table[]>(n);
  for (let i = 0; i < n; i++) {
    table[i] = new Array<Table>(n);
    for (let j = 0; j < n; j++)
      table[i][j] = new Object({
        up: Infinity,
        down: Infinity,
        left: Infinity,
        right: Infinity,
      }) as Table;
  }

  while (queue.length !== 0) {
    const {x, y} = queue.pop() as Point;
    if (x === 0 && y === 0) {
      table[x][y].up = table[x][y].down = 0;
      table[x][y].left = table[x][y].right = 0;
    }

    //  자체 갱신

    const t = table[x][y];
    table[x][y].up = Math.min(t.up, t.down, t.left + CORNER, t.right + CORNER);
    table[x][y].down = Math.min(
      t.down,
      t.up,
      t.left + CORNER,
      t.right + CORNER
    );
    table[x][y].left = Math.min(
      t.left,
      t.right,
      t.up + CORNER,
      t.down + CORNER
    );
    table[x][y].right = Math.min(
      t.right,
      t.left,
      t.up + CORNER,
      t.down + CORNER
    );

    // 인접 타일 갱신

    if (x !== 0 && board[x - 1][y] === 0 && table[x - 1][y].down > t.up) {
      queue.unshift({x: x - 1, y});
      table[x - 1][y].down = t.up + STRAIGHT;
    }
    if (x !== n - 1 && board[x + 1][y] === 0 && table[x + 1][y].up > t.down) {
      queue.unshift({x: x + 1, y});
      table[x + 1][y].up = t.down + STRAIGHT;
    }
    if (y !== 0 && board[x][y - 1] === 0 && table[x][y - 1].right > t.left) {
      queue.unshift({x, y: y - 1});
      table[x][y - 1].right = t.left + STRAIGHT;
    }
    if (
      y !== n - 1 &&
      board[x][y + 1] === 0 &&
      table[x][y + 1].left > t.right
    ) {
      queue.unshift({x, y: y + 1});
      table[x][y + 1].left = t.right + STRAIGHT;
    }
  }

  return Math.min(table[n - 1][n - 1].up, table[n - 1][n - 1].left);
}

let _temp: number[][];

_temp = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
console.log(solution(_temp)); // 900

_temp = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
];
console.log(solution(_temp)); // 3800

_temp = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
];
console.log(solution(_temp)); // 2100

_temp = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
];
console.log(solution(_temp)); // 3200
