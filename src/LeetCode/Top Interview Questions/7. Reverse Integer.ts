function reverse(x: number): number {
  const isMinus = x < 0;
  const reversedX = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  );

  if (reversedX < -Math.pow(2, 31) || Math.pow(2, 31) - 1 < reversedX) return 0;
  return reversedX * (isMinus ? -1 : 1);
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469));
