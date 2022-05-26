function traversePalindrome(s: string, midIdx: number) {
  // aba
  let oddString = "";
  let i: number = 0;
  for (i = 1; midIdx - i >= 0 && midIdx + i < s.length; i++)
    if (s[midIdx - i] !== s[midIdx + i]) break;
  oddString = s.slice(midIdx - i + 1, midIdx + i);

  // abba
  let evenString = "";
  for (i = 0; midIdx - i >= 0 && midIdx + i + 1 < s.length; i++)
    if (s[midIdx - i] !== s[midIdx + i + 1]) break;

  evenString = s.slice(midIdx - i + 1, midIdx + i + 1);

  return oddString.length > evenString.length ? oddString : evenString;
}

function longestPalindrome(s: string): string {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const palindrome = traversePalindrome(s, i);
    if (answer.length < palindrome.length) answer = palindrome;
  }

  return answer;
}

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("aaa")); // "aaa"
