// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ko.md

// 아래 테스트를 통과하게 만드시오.

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
