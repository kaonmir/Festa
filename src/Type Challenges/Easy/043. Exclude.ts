// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

type MyExclude<T, U> = T extends U ? never : T;
type Wow<T extends U, U> = T;

type tests = [MyExclude<"a" | "b" | "c", "a">, Wow<"a", "a" | "B">];

// 아래는 변경하지마시오.

import type {Equal, Expect} from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];
