const MIN_RANGE = -Math.pow(2, 31);
const MAX_RANGE = Math.pow(2, 31) - 1;

function myAtoi(s: string): number {
  let answer = "";
  s = s.trimStart(); // Read in and ignore any leading whitespace.

  // Check if the next character (if not already at the end of the string) is '-' or '+'.
  const isMinus = s.charAt(0) === "-";
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (i === 0 && (c === "-" || c === "+")) continue;
    if (/\d/.test(c) === false) break;
    answer = answer + c;
  }

  if (answer === "") return 0;

  const answerNum: number = parseInt(answer) * (isMinus ? -1 : 1);
  if (answerNum < MIN_RANGE) return MIN_RANGE;
  else if (MAX_RANGE < answerNum) return MAX_RANGE;
  else return answerNum;
}

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("-91283472332")); // -2147483648
