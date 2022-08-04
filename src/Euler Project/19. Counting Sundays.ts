const days = [
  [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
  [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
  [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
  [3, 1, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
] as const;

function fourYears(day: number): [number, number] {
  let answer = 0;
  return [answer, day];
}

function countingSundays(): number {
  let answer = 0;
  var day = 2; // Tuesday

  for (let t = 0; t < 25; t++) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 12; j++) {
        if (day === 0) answer += 1;

        if (t === 24) day += days[0][j];
        else day += days[i][j];
        day %= 7;
      }
    }
  }

  return answer;
}

console.log(countingSundays());
