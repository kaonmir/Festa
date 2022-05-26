function countPalindrom(s: string, l: number, r: number) {
  var answer = 0;
  while (0 <= l && r < s.length && s[l] === s[r]) {
    answer += 1;
    l -= 1;
    r += 1;
  }
  return answer;
}
function countSubstrings(s: string): number {
  var answer = 0;
  for (var i = 0; i < s.length; i++) {
    answer += countPalindrom(s, i, i);
    if (i + 1 < s.length) answer += countPalindrom(s, i, i + 1);
  }
  return answer;
}

console.log(countSubstrings("abc")); // 3
console.log(countSubstrings("aaa")); // 6
