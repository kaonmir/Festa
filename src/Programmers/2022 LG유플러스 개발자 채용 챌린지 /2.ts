function solution(compressed: string) {
  const stack: string[] = [];

  for (const char of compressed) {
    if (char === ")") {
      const word: string[] = [];
      // pop until "("
      let popped = stack.pop();
      while (popped !== "(") {
        word.unshift(popped as string);
        popped = stack.pop();
      }
      // pop until number
      popped = stack.pop();
      let num = "";
      while (popped && !isNaN(Number(popped))) {
        num = popped + num;
        popped = stack.pop();
      }
      // push popped back
      if (popped) stack.push(popped);

      // push word * num
      for (let i = 0; i < Number(num); i++) stack.push(...word);
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

console.log(solution("2(2(hi)2(co))x2(bo)")); // "hihicocohihicocoxbobo"
