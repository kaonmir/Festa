function longestCommonSubsequence(text1: string, text2: string): number {
  const table: number[][] = new Array(text1.length);
  for (var i = 0; i < text1.length; i++)
    table[i] = new Array(text2.length).fill(0);

  for (var i = 0; i < text1.length; i++) {
    for (var j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        table[i][j] = (i !== 0 && j !== 0 ? table[i - 1][j - 1] : 0) + 1;
      } else {
        table[i][j] = Math.max(
          i !== 0 ? table[i - 1][j] : 0,
          j !== 0 ? table[i][j - 1] : 0
        );
      }
    }
  }
  return table[text1.length - 1][text2.length - 1];
}

console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
console.log(longestCommonSubsequence("abczdez", "aefz")); // 3
