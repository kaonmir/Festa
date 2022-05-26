// const one_digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const two_digits = [
  ...["10", "11", "12", "13", "14", "15", "15", "16", "17"],
  ...["18", "19", "20", "21", "22", "23", "24", "25", "26"],
];
function numDecodings(s: string): number {
  const counts = new Array(s.length + 1).fill(0);
  counts[0] = 1;

  for (var i = 1; i <= s.length; i++) {
    if (s[i - 1] !== "0") counts[i] += counts[i - 1];
    if (i >= 2 && two_digits.includes(s.slice(i - 2, i)))
      counts[i] += counts[i - 2];

    if (counts[i] === 0) return 0;
  }

  return counts[s.length];
}

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("0")); // 0
console.log(numDecodings("06")); // 0
