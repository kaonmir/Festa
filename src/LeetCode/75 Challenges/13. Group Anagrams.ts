function groupAnagrams(strs: string[]): string[][] {
  const sortedStrs = strs.map((str) => str.split("").sort().join(""));

  const visited: boolean[] = Array(strs.length).fill(false);
  const answer: string[][] = [];

  for (var i = 0; i < strs.length; i++) {
    if (visited[i]) continue;
    visited[i] = true; // useless but prettier

    const row: string[] = [strs[i]];

    for (var j = i + 1; j < strs.length; j++) {
      if (sortedStrs[i] === sortedStrs[j]) {
        visited[j] = true;
        row.push(strs[j]);
      }
    }
    answer.push(row);
  }
  return answer;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log([""]); // [[""]]
console.log(["a"]); // [["a"]]
