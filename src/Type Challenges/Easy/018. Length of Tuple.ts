// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

type First<T extends any[]> = T[0];

// 아래는 변경하지마시오.

// type arr1 = ["a", "b", "c"];
// type arr2 = [3, 2, 1];

// type head1 = First<arr1>; // expected to be 'a'
// type head2 = First<arr2>; // expected to be 3
