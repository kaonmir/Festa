// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 추석 트래픽

/*
9월 15일 초당 최대 처리량 계산
초당 최대 처리량 = t ~ t+1 사이 최대 요청 개수

입력: "S T" 문자열 배열
S = 응답완료 시간 => 2016-09-15 hh:mm:ss.sss
T = 처리시간 => 0.312s
응답 시작 시간 = S - T + 0.001s

0.001 <= T <= 3.000

*/

type Time = {
  S: number;
  T: number;
};

// hh:mm:ss.sss
function parseS(line: string): number {
  const times = line.split(/[:\.]/).map((k) => parseInt(k));
  const hh = times[0];
  const mm = hh * 60 + times[1];
  const ss = mm * 60 + times[2];
  const sss = ss * 1000 + times[3];

  return sss;
}

// 10, 3 | a b
// 13, 4 | c d

// c - d <= a

/* 2s 2.0s 2.00s 2.000s */
function parseT(line: string): number {
  const times = line.split(/[\.s]/).map((k) => parseInt(k));
  if (times.length === 2) return times[0] * 1000;
  else return times[0] * 1000 + times[1];
}

function solution(lines: string[]) {
  const times: Time[] = lines.map((line) => {
    const [_, stringS, stringT] = line.split(" ");
    return {
      S: parseS(stringS),
      T: parseT(stringT),
    };
  });

  return times
    .map((time, idx) => {
      let count = 1;
      for (let i = idx + 1; i < times.length; i++) {
        if (times[i].S - times[i].T + 1 <= time.S + 999) count += 1;
      }
      return count;
    })
    .reduce((prev, cur) => Math.max(prev, cur), 0);
}

console.log(
  solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"])
);

console.log(
  solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"])
);

console.log(
  solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s",
  ])
);
