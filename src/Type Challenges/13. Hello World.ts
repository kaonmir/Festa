/**
  13 - Hello World

  이 과제에서는, 아래의 코드를 변경해서 테스트 코드를 통과하세요. (타입 체크 에러 없음).
*/

// string이 되어야 합니다.
type HelloWorld = string;

// 아래의 테스트가 통과하도록 만드세요.
import type {Equal, Expect, NotAny} from "@type-challenges/utils";

type test = Expect<Equal<HelloWorld, string>>;
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
