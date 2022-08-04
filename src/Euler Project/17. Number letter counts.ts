/**
 * one hundred = 100 / and = 99
 * two hundred = 100 / and = 99
 * ...
 * nine hundred = 100 / and = 99
 * * and = 99 x 9
 *! * one = 100, two = 100, ...
 * * hundred = 100 x 9
 * * one thousand = 1
 * ---
 * x20 -> twenty = 10 x 10
 * x30 -> thirty = 10 x 10
 * ...
 * x90 -> ninety = 10 x 10
 * ---
 * x10 -> ten = 10
 * x11 -> eleven = 10
 * x12 -> twelve = 10
 * ...
 * x19 -> nineteen = 10
 * ---
 * x = 0~9, y = 0 or 2~9
 *! xy1 -> one = 10 x 9
 * xy2 -> two = 10 x 9
 * ...
 * xy9 -> nine = 10 x 9
 */

const lettersLength = {
  one: 3,
  two: 3,
  three: 5,
  four: 4,
  five: 4,
  six: 3,
  seven: 5,
  eight: 5,
  nine: 4,
  ten: 3,
  eleven: 6,
  twelve: 6,
  thirteen: 8,
  fourteen: 8,
  fifteen: 7,
  sixteen: 7,
  seventeen: 9,
  eighteen: 8,
  nineteen: 8,
  twenty: 6,
  thirty: 6,
  forty: 5,
  fifty: 5,
  sixty: 5,
  seventy: 7,
  eighty: 6,
  ninety: 6,
  hundred: 7,
  thousand: 8,
  and: 3,
};

const numberLetterCounts = (): number => {
  var answer = 0;
  answer += lettersLength.one * (100 + 10 * 9 + 1); // includes one thousand
  answer += lettersLength.two * (100 + 10 * 9);
  answer += lettersLength.three * (100 + 10 * 9);
  answer += lettersLength.four * (100 + 10 * 9);
  answer += lettersLength.five * (100 + 10 * 9);
  answer += lettersLength.six * (100 + 10 * 9);
  answer += lettersLength.seven * (100 + 10 * 9);
  answer += lettersLength.eight * (100 + 10 * 9);
  answer += lettersLength.nine * (100 + 10 * 9);

  answer += lettersLength.ten * 10;
  answer += lettersLength.eleven * 10;
  answer += lettersLength.twelve * 10;
  answer += lettersLength.thirteen * 10;
  answer += lettersLength.fourteen * 10;
  answer += lettersLength.fifteen * 10;
  answer += lettersLength.sixteen * 10;
  answer += lettersLength.seventeen * 10;
  answer += lettersLength.eighteen * 10;
  answer += lettersLength.nineteen * 10;

  answer += lettersLength.twenty * (10 * 10);
  answer += lettersLength.thirty * (10 * 10);
  answer += lettersLength.forty * (10 * 10);
  answer += lettersLength.fifty * (10 * 10);
  answer += lettersLength.sixty * (10 * 10);
  answer += lettersLength.seventy * (10 * 10);
  answer += lettersLength.eighty * (10 * 10);
  answer += lettersLength.ninety * (10 * 10);

  answer += lettersLength.hundred * (100 * 9);
  answer += lettersLength.thousand * 1;
  answer += lettersLength.and * (99 * 9);

  return answer;
};

console.log(numberLetterCounts());
