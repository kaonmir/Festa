const maxProfit = (prices: number[]): number => {
  var min: number = 1e5;
  var answer = 0;

  for (var i = 0; i < prices.length; i++) {
    if (min > prices[i]) min = prices[i];
    else answer = Math.max(answer, prices[i] - min);
  }

  return answer;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
