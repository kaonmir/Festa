type T = [number, number];
function insert(intervals: T[], newInterval: T): T[] {
  intervals.push(newInterval);
  const sorted = intervals.sort((A, B) => A[0] - B[0]);

  const answer = [sorted[0]];
  for (var i = 1; i < sorted.length; i++) {
    const t = answer.pop();
    const k = sorted[i];

    if (!t || !k) throw Error("Nullable Error");

    if (t[1] < k[0]) {
      answer.push(t, k);
    } else answer.push([Math.min(t[0], k[0]), Math.max(t[1], k[1])]);
  }
  return answer;
}

var _intervals: T[];
_intervals = [
  [1, 3],
  [6, 9],
];

console.log(insert(_intervals, [2, 5])); //[[1,5],[6,9]]

_intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
console.log(insert(_intervals, [4, 8])); // [[1,2],[3,10],[12,16]]
