function spiralOrder(matrix: number[][]): number[] {
  const answer: number[] = [];
  const counts = matrix.length * matrix[0].length;
  var dir = 0; // 0: right, 1: down, 2: left, 3: up

  while (answer.length !== counts) {
    if (dir === 0) {
      answer.push(...matrix[0]);
      matrix = matrix.slice(1);
    } else if (dir === 1) {
      answer.push(...matrix.map((arr) => arr[arr.length - 1]));
      matrix = matrix.map((arr) => arr.slice(0, -1));
    } else if (dir === 2) {
      answer.push(...matrix[matrix.length - 1].reverse());
      matrix = matrix.slice(0, -1);
    } else if (dir === 3) {
      answer.push(...matrix.map((arr) => arr[0]).reverse());
      matrix = matrix.map((arr) => arr.slice(1));
    }

    dir = (dir + 1) % 4;
  }

  return answer;
}

console.log(spiralOrder([[7], [9], [6]])); // [7,9,6]

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]
