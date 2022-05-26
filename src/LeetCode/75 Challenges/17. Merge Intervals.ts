function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  const answer = intervals
    .sort((A, B) => A[0] - B[0])
    .reduce(
      (answer, [s, e]) => {
        const t = answer.pop();
        if (t == null) throw Error("Error");

        if (s <= t[1]) answer.push([t[0], Math.max(t[1], e)]);
        else answer.push(t, [s, e]);

        return answer;
      },
      [intervals[0]]
    );
  return answer;
}

var _intervals: number[][];
_intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(_intervals)); // [[1,6],[8,10],[15,18]]

_intervals = [
  [1, 4],
  [4, 5],
];
console.log(merge(_intervals)); // [[1,5]]
