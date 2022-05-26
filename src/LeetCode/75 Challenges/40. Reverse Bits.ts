function reverseBits(n: number): number {
  const temp = n.toString(2);
  const str = "0".repeat(32 - temp.length) + temp;
  return parseInt(str.split("").reverse().join(""), 2);
}

console.log(reverseBits(4294967293)); // 11111111111111111111111111111101 -> 3221225471
console.log(reverseBits(43261596)); // 00000010100101000001111010011100 -> 964176192
