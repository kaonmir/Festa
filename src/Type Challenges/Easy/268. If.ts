/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #easy #utils
  
  ### Question
  
  Implement a utils `If` which accepts condition `C`, a truthy return type `T`, and a falsy return type `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.
  
  For example:
  
  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```
  
  > View on GitHub: https://tsch.js.org/268
*/

/* _____________ Your Code Here _____________ */

type If<C extends true | false, T, F> = C extends true ? T : F;

/* _____________ Test Cases _____________ */
import type {Equal, Expect} from "@type-challenges/utils";

type TestedA = If<true, "a", "b">;
type TestedB = If<false, "a", 2>;

type cases = [Expect<Equal<TestedA, "a">>, Expect<Equal<TestedB, 2>>];

// @ts-expect-error
type error = If<null, "a", "b">;
