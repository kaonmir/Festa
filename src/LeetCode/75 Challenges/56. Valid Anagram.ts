function getCount(s: string) {
  const answer: Record<string, number> = {};
  s.split("").forEach((v) => {
    if (!(v in answer)) answer[v] = 1;
    else answer[v] += 1;
  });
  return answer;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const s_count = getCount(s);
  const t_count = getCount(t);

  return Object.keys(s_count).every(
    (k) => k in t_count && t_count[k] === s_count[k]
  );
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
