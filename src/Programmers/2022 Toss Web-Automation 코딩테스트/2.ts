// 태그 정상 여부
// <div> 와 </div>
// <img /> 가능
// <br>은 슬래쉬 없음

function solution(html: string) {
  const regexp = /(< *[a-z]+ *>|<\/ *[a-z]+> *|<[a-z]+ *\/>|<br>)/g;
  const stack = [];
  for (const match of html.matchAll(regexp)) {
    if (match[0])
  }
  // return arr;
}

// console.log(solution("<div> </div>")); // 100
// console.log(solution("<img /> <img /> <br>")); // 3800
console.log(solution("<img /> <br> < img>")); // 1235801
