function countPalindrom(s: string, l: number, r: number): string {
  while (0 <= l && r < s.length && s[l] === s[r]) {
    l -= 1;
    r += 1;
  }

  if (r - l <= 1) return "";
  else return s.slice(l + 1, r);
}
function longestPalindrome(s: string): string {
  var answer = "";
  for (var i = 0; i < s.length; i++) {
    const str1 = countPalindrom(s, i, i);
    if (answer.length < str1.length) answer = str1;
    if (i + 1 < s.length) {
      const str2 = countPalindrom(s, i, i + 1);
      if (answer.length < str2.length) answer = str2;
    }
  }
  return answer;
}

console.log(longestPalindrome("babad")); // bab or aba
console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("a")); // a
console.log(longestPalindrome("ac")); // a or c
