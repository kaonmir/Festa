type T = { [a: string]: number };
function fullCheck(s_count: T, t_count: T): boolean {
  return Object.entries(t_count).every(([v, count]) => {
    if (!(v in s_count) || s_count[v] < count) return false;
    else return true;
  });
}

function minWindow(s: string, t: string): string {
  // reformat t to object
  const s_count: T = {};
  const t_count: T = {};
  t.split("").forEach((v) => {
    if (!(v in t_count)) {
      s_count[v] = 0;
      t_count[v] = 1;
    } else t_count[v] += 1;
  });

  var l = 0;
  var r: number; // answer does not include s[r]
  var temp = "";

  for (r = 0; r < s.length && !fullCheck(s_count, t_count); r++) {
    temp += s[r];
    if (s[r] in s_count) s_count[s[r]] += 1;
  }
  if (!fullCheck(s_count, t_count)) return "";

  var answer = temp;
  while (l < r && r <= s.length) {
    var k = "";
    while (l < r && r <= s.length) {
      k = temp[0];
      temp = temp.slice(1);
      l += 1;
      if (!(k in s_count)) continue;

      s_count[k] -= 1;
      if (s_count[k] < t_count[k]) break;
    }

    if (answer.length > temp.length + 1) answer = k + temp;
    if (r === s.length) break;

    while (r < s.length) {
      const letter = s[r++];
      temp += letter;
      if (letter in s_count) s_count[letter] += 1;
      if (letter === k) break;
    }
    if (r === s.length && s[r - 1] !== k) break;
  }

  return answer;
}
console.log(minWindow("acbdbaab", "aabd")); // "dbaa"
console.log(minWindow("ab", "a")); // "a"
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""
