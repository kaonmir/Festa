function containsDuplicate(nums: number[]): boolean {
  var dups = nums.filter((n, i) => nums.indexOf(n) != i);
  return dups.length > 0;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
