function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  const counts: number[][] = new Array(amount + 1);
  for (var i = 0; i <= amount; i++)
    counts[i] = new Array(coins.length).fill(Infinity);
  counts[0] = new Array(coins.length).fill(0);

  for (var money = 1; money <= amount; money++) {
    coins.forEach((coin, i) => {
      if (money - coin < 0) return;
      const count = counts[money - coin]
        .filter((_, idx) => coins[idx] <= coin)
        .reduce((a, b) => Math.min(a, b), Infinity);
      counts[money][i] = count + 1;
    });
  }

  const answer = counts[amount]
    .map((k) => k ?? Infinity)
    .reduce((a, b) => Math.min(a, b), Infinity);

  if (answer === Infinity) return -1;
  else return answer;
}

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([1, 2], 4)); // 3
console.log(coinChange([2], 3)); // -1

console.log(coinChange([1], 0)); // 0
console.log(coinChange([1], 1)); // 1
console.log(coinChange([1], 2)); // 2
