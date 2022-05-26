// ? Which naming convention is better, Cammel and underscore?

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const pres: Record<number, number[]> = {};
  prerequisites.forEach(([a, b]) => {
    if (b in pres) pres[b].push(a);
    else pres[b] = [a];
  });

  const visited = new Array(numCourses).fill(false);

  for (var course = 0; course < numCourses; course++) {
    if (visited[course]) continue;

    const temp_visited = new Array(numCourses).fill(false);
    const stack: number[] = [course];

    while (stack.length !== 0) {
      const t = stack.pop();
      if (t == null || temp_visited[t]) return false;
      else if (visited[t]) return true;

      visited[t] = temp_visited[t] = true;
      if (t in pres) stack.push(...pres[t]);
    }
  }

  return true;
}

// a <- b, b is prerequisite

var _prerequistes: number[][];

_prerequistes = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

console.log(canFinish(4, _prerequistes)); // true

_prerequistes = [
  [1, 0],
  [2, 1],
];
console.log(canFinish(4, _prerequistes)); // true

_prerequistes = [[1, 0]];
console.log(canFinish(2, _prerequistes)); // true

_prerequistes = [
  [1, 0],
  [0, 1],
];
console.log(canFinish(2, _prerequistes)); // false
