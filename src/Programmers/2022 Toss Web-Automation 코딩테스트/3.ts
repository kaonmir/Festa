// id length >= 3
// Math.floor(id length / 2) 만 마스킹
// 중간지점, 한칸 치우침

// 1234567 => 3
// 12***67
// half = (7 / 2 ) floor
// l = 2 = (len - half) / 2 floor
// r = 2 = (len - half )/ 2 ceil

function solution(id: string) {
  const length = id.length;
  const half = Math.floor(length / 2);
  const l = Math.floor((length - half) / 2);
  const r = length - Math.ceil((length - half) / 2);

  return id.slice(0, l) + "*".repeat(half) + id.slice(r);
}

console.log(solution("hcmsjfb2e5")); //"hc*****2e5"
console.log(solution("k9t0nio7e")); //"k9****o7e"
console.log(solution("da2ssb3v")); //"da****3v"
console.log(solution("k0r6k9")); //"k***k9"
console.log(solution("7do98")); //"7**98"
