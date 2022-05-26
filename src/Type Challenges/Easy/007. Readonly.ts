// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.ko.md

type MyReadonly<T extends {}> = {readonly [P in keyof T]: T[P]};

// 아래는 변경하지마시오.

/*
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

*/
