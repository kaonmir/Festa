const atoz = [
  ...["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
  ...["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
];

function longestSequence(s: string, target: string, k: number): number {
  var count = 0;
  var l = 0;
  var r = 0;

  while (r < s.length && !(s[r] !== target && count === k)) {
    if (s[r] !== target) count += 1;
    r += 1;
  }

  var answer = r - l;

  while (r < s.length) {
    while (l < r && s[l] === target) l += 1;
    l += 1; // consume 1 replacement character
    while (r < s.length && s[r] === target) r += 1;
    r += 1; // supply 1 replacement character
    while (r < s.length && s[r] === target) r += 1;
    answer = Math.max(answer, r - l);
  }

  return answer;
}

function characterReplacement(s: string, k: number): number {
  return atoz
    .filter((a) => s.includes(a))
    .reduce((max, a) => Math.max(max, longestSequence(s, a, k)), 0);
}

var _s: string;
_s =
  "IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR";
console.log(characterReplacement(_s, 2)); // 6
console.log(characterReplacement("ABCCDEFGHIJKKZZKK", 2)); // 6

console.log(characterReplacement("ABCBC", 2)); // 4
console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
