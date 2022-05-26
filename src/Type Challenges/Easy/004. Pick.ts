// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ko.md
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }

type MyPick<T, K extends keyof T> = {[P in K]: T[P]};

// 아래는 변경하지마시오.

/*

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

*/
