// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ko.md

type TupleToObject<T extends readonly string[]> = {[P in T[number]]: P};

// 아래는 변경하지마시오.

// const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
// type result = TupleToObject<typeof tuple>;
