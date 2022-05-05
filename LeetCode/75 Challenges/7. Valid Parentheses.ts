function isValid(s: string): boolean {
  const parentheses = s.split("").map((v) => {
    if (v === "(") return 1;
    if (v === ")") return -1;
    if (v === "{") return 2;
    if (v === "}") return -2;
    if (v === "[") return 3;
    if (v === "]") return -3;
    else throw Error("sdf");
  });
  const stack: number[] = [];

  for (const par of parentheses) {
    if (stack.length === 0 && par < 0) return false;
    else if (par < 0) {
      if (stack[stack.length - 1] !== -par) return false;
      stack.pop();
    } else stack.push(par);
  }

  if (stack.length === 0) return true;
  else return false;
}

console.log(isValid("()")); // true
console.log(isValid("([)]")); // false
console.log(isValid("([]([]))")); // true
console.log(isValid("{([()])}()")); // true
