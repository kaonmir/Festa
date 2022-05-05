function wordBreak(s: string, wordDict: string[]): boolean {
  const visited: boolean[] = new Array(s.length + 1).fill(false);
  visited[0] = true;

  for (var i = 1; i <= s.length; i++) {
    visited[i] = wordDict
      .filter((word) => word.length <= i && visited[i - word.length])
      .some((word) => s.slice(i - word.length, i) === word);
  }

  return visited[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
const _s =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const _wordDict = [
  "aa",
  "aaa",
  "aaaa",
  "aaaaa",
  "aaaaaa",
  "aaaaaaa",
  "aaaaaaaa",
  "aaaaaaaaa",
  "aaaaaaaaaa",
  "ba",
];

console.log(wordBreak(_s, _wordDict));
