/*
1: R/T
2: C/F
3: J/M
4: A/N

매우 동의/매우 비동 => 3점
동의/비동의 => 2점
약간 동의/약간 비동의 => 1점
모르겠음 => 0점

점수가 같으면 사전 순 */

type Score = "RT" | "TR" | "FC" | "CF" | "MJ" | "JM" | "AN" | "NA";

function solution(survey: Score[], choices: number[]) {
  const score: Record<Score, number> = {
    RT: 0,
    TR: 0,
    FC: 0,
    CF: 0,
    MJ: 0,
    JM: 0,
    AN: 0,
    NA: 0,
  };

  let answer = "";
  for (let i = 0; i < survey.length; i++) score[survey[i]] += choices[i] - 4;

  if (score["RT"] - score["TR"] <= 0) answer += "R";
  else answer += "T";

  if (score["CF"] - score["FC"] <= 0) answer += "C";
  else answer += "F";

  if (score["JM"] - score["MJ"] <= 0) answer += "J";
  else answer += "M";

  if (score["AN"] - score["NA"] <= 0) answer += "A";
  else answer += "N";

  return answer;
  return score;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"
