function lengthOfLongestSubstring(s: string): number {
  var answer = 0;
  for (var i = 0; i < s.length; i++) {
    var str = s[i];
    for (var j = i + 1; j < s.length; j++) {
      if (str.includes(s[j])) break;
      else str += s[j];
    }
    answer = Math.max(answer, str.length);
  }

  return answer;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
