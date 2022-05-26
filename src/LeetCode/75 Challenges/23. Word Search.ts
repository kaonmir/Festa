import { getFourway } from "./Utility";

function traverse(
  board: string[][],
  target_word: string,
  p: [number, number],
  visited: boolean[][],
  idx: number
): boolean {
  if (idx === target_word.length) return true;

  const t = target_word[idx];
  return getFourway(p, board.length, board[0].length)
    .filter(([x, y]) => board[x][y] === t)
    .filter(([x, y]) => visited[x][y] === false)
    .some(([x, y]) => {
      visited[x][y] = true;
      const result = traverse(board, target_word, [x, y], visited, idx + 1);
      visited[x][y] = false;
      return result;
    });
}

function exist(board: string[][], word: string): boolean {
  // traverse board to find first letter
  const inits: [number, number][] = [];
  board.forEach((row, x) => {
    row.forEach((v, y) => {
      if (v === word[0]) inits.push([x, y]);
    });
  });

  const visited: boolean[][] = new Array(board.length).fill([]);
  for (var i = 0; i < visited.length; i++)
    visited[i] = new Array(board[0].length).fill(false);

  // recursively find each letters out
  return inits.some((p) => {
    visited[p[0]][p[1]] = true;
    const result = traverse(board, word, p, visited, 1);
    visited[p[0]][p[1]] = false;
    return result;
  });
}

var _board: string[][], _word: string;

_board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
_word = "ABCCED";
console.log(exist(_board, _word)); // true

_board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
_word = "SEE";
console.log(exist(_board, _word)); // true

_board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
_word = "ABAC";
console.log(exist(_board, _word)); // false
