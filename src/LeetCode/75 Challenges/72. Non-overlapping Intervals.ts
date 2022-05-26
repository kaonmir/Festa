function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 1) return 0;

  intervals = intervals.sort(([a0, a1], [b0, b1]) =>
    a0 === b0 ? a1 - b1 : a0 - b0
  );

  const overlaps: [number, number[]][] = new Array(intervals.length);
  for (var i = 0; i < intervals.length; i++) {
    overlaps[i] = [0, []];
    overlaps[i][1] = new Array(0);
  }

  var dump: number[] = [];

  for (var i = 0; i < intervals.length; i++) {
    const t = intervals[i];
    dump = dump.filter((d) => intervals[d][1] > t[0]);

    dump.forEach((d) => overlaps[d][1].push(i));
    overlaps[i][1].push(...dump);
    overlaps[i][0] = i;
    dump.push(i);
  }

  var sorted = overlaps.sort(([_, A], [__, B]) => B.length - A.length);
  var answer = 0;
  while (sorted[0][1].length !== 0) {
    const [idx, _] = sorted[0];
    answer += 1;
    sorted.forEach((row) => {
      const i = row[1].indexOf(idx);
      if (i !== -1) row[1].splice(i, 1);
    });
    sorted.splice(0, 1);
    sorted = overlaps.sort(([_, A], [__, B]) => B.length - A.length);
  }

  return answer;
}

// --------------------

var _intervals: number[][];

_intervals = [
  [1, 2],
  [5, 12],
  [8, 15],
  [2, 5],
  [0, 10],
  [2, 3],
];
console.log(eraseOverlapIntervals(_intervals)); // 3

_intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
console.log(eraseOverlapIntervals(_intervals)); // 1

_intervals = [
  [1, 2],
  [1, 2],
  [1, 2],
];
console.log(eraseOverlapIntervals(_intervals)); // 2
_intervals = [
  [1, 2],
  [2, 3],
];
console.log(eraseOverlapIntervals(_intervals)); // 0
