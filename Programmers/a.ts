// 코딩테스트 연습 > 2020 카카오 인턴십 > 보석 쇼핑

function solution(germs: string[]) {
  let l = 0;
  let r = 0;

  const germs_uniq = germs.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    [] as string[]
  );

  const germs_cur: Record<string, number> = {};
  germs_uniq.forEach((v) => (germs_cur[v] = 0));
  germs_cur[germs[0]]++;

  let uniq_conut = germs_uniq.length - 1;
  while (uniq_conut !== 0) {
    r += 1;
    if (germs_cur[germs[r]] === 0) uniq_conut -= 1;
    germs_cur[germs[r]] += 1;
  }

  let lastGerm = "";
  let answer: [number, number] = [l, r];

  while (1) {
    if (answer[1] - answer[0] > r - l) answer = [l + 1, r + 1];

    while (l === 0 || germs_cur[germs[l - 1]] !== 0) {
      germs_cur[germs[l]] -= 1;
      l += 1;
    }
    lastGerm = germs[l - 1];
    if (answer[1] - answer[0] > r - (l - 1)) answer = [l - 1, r];
    if (r === germs.length - 1) break;

    r += 1;
    germs_cur[germs[r]] += 1;

    do {
      r += 1;
      germs_cur[germs[r]] += 1;
    } while (r! === germs.length - 1 && germs[r] !== lastGerm);

    if (germs[r] !== lastGerm) break;
  }

  return [answer[0] + 1, answer[1] + 1];
}

// console.log(
//   solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
// );
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
console.log(solution(["XYZ", "XYZ", "XYZ"]));
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));
