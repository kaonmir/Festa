const AMOUNTVIOLATION = 1;
const THREETRANSACTIONS = 2;
const SIXTYDAYS = 3;

type Violated = [number, number][];

function dateSubtraction(num1: number, num2: number) {
  const date1 = new Date();
  const date2 = new Date();
  date1.setFullYear(num1 / 10000, ((num1 / 100) % 100) - 1, num1 % 100);
  date2.setFullYear(num2 / 10000, ((num2 / 100) % 100) - 1, num2 % 100);

  var diff = Math.abs(date1.getTime() - date2.getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return diffDays;
}
function solution(
  today: number,
  merchantInfoList: [string, string][],
  tradeList: [number, string][]
) {
  const violated: Violated = merchantInfoList
    .map(([merchantDate, merchantId]) => {
      const filtered = tradeList.filter(
        ([_, tradeId]) => tradeId === merchantId
      );

      const total = filtered.reduce((acc, [amount, _]) => acc + amount, 0);
      if (total <= 10000) return [merchantId, AMOUNTVIOLATION] as const;

      const numTransactions = filtered.length;
      if (numTransactions < 3) return [merchantId, THREETRANSACTIONS] as const;

      const diffDays = dateSubtraction(today, parseInt(merchantDate));
      if (diffDays >= 60) return [merchantId, SIXTYDAYS] as const;
      else return [merchantId, 0] as const;
    })
    .filter(([_, violation]) => violation > 0)
    .map(([merchantId, violation]) => [parseInt(merchantId), violation]);

  return violated
    .sort(([m1, v1], [m2, v2]) => {
      if (v2 - v1 !== 0) return v1 - v2;
      else return m1 - m2;
    })
    .map(([merchantId, _]) => merchantId.toString());
}

console.log(
  solution(
    20220601,
    [
      ["20220501", "1"],
      ["20220501", "2"],
      ["20220501", "3"],
    ],
    [
      [100, "1"],
      [200, "1"],
      [300, "1"],
      [400, "1"],
      [5000, "2"],
      [2000, "2"],
      [5001, "2"],
      [4000, "2"],
      [30000, "3"],
    ]
  )
); // 1, 3

console.log(
  solution(
    20220601,
    [
      ["20220501", "1"],
      ["20220101", "2"],
      ["20220530", "3"],
    ],
    [
      [10000, "1"],
      [30000, "3"],
      [10000, "3"],
      [10000, "3"],
      [10000, "3"],
    ]
  )
); // 1, 2
