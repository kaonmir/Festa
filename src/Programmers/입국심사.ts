// 코딩테스트 연습 > 이분탐색 > 입국심사

var getCapacity = (times: number[], t: number) =>
  times.reduce((prev, time) => prev + Math.floor(t / time), 0);

function solution(n: number, times: number[]) {
  let l = Math.min(...times);
  let r = Math.min(...times) * n;

  while (l !== r) {
    const mid = Math.floor((l + r) / 2);
    const capacity = getCapacity(times, mid);

    if (capacity >= n) r = mid;
    else l = mid + 1;
  }
  return l;
}

console.log(solution(6, [7, 10])); // 28
