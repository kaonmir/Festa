// 코딩테스트 연습 > 동적계획법(Dynamic Programming) > N으로 표현

function solution(n: number, num: number) {
  const table = new Array<number[]>(8);
  for (let i = 0; i < 9; i++) table[i] = new Array<number>();

  if (n === num) return 1;
  table[1].push(n);

  for (let i = 2; i < 9; i++) {
    table[i].push(parseInt(n.toString().repeat(i))); // 555555
    let l = 1;
    const set = new Set<number>();
    while (l <= Math.floor(i / 2)) {
      const r = i - l;
      table[l].forEach((a) => {
        table[r].forEach((b) => {
          set.add(a + b);
          set.add(Math.max(a, b) - Math.min(a, b));
          set.add(a * b);
          if (b !== 0) set.add(Math.floor(a / b));
          if (a !== 0) set.add(Math.floor(b / a));
        });
      });
      l += 1;
    }
    table[i].push(...Array.from(set.values()).filter((v) => v >= 0));
    if (table[i].includes(num)) return i;
  }

  return -1;
}

console.log(solution(5, 12)); // 4
console.log(solution(5, 5)); // 1
console.log(solution(2, 11)); // 3
