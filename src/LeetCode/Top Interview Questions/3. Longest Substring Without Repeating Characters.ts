function lengthOfLongestSubstring(s: string): number {
  let answer = 0;
  let substring: string[] = [];

  for (let idx = 0; idx < s.length; idx++) {
    const character = s.charAt(idx);

    const subIndex = substring.findIndex((v) => v === character);
    if (subIndex >= 0) substring = substring.slice(subIndex + 1);

    substring.push(character);
    answer = Math.max(answer, substring.length);
  }
  return answer;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("")); // 0
