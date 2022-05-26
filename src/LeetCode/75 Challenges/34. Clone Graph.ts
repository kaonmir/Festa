import Node from "./GraphNode";

function cloneGraph(node: Node | null): Node | null {
  if (node == null) return null;

  const copy: Record<number, Node> = {};
  copy[1] = new Node(node.val);

  const queue: Node[] = [node];

  while (queue.length !== 0) {
    const t = queue.shift();
    if (t == null) throw Error("t is null");

    t.neighbors.forEach((n) => {
      if (n == null) throw Error("n is null");
      if (n.val in copy) copy[t.val].neighbors.push(copy[n.val]);
      else {
        copy[n.val] = new Node(n.val);
        copy[t.val].neighbors.push(copy[n.val]);
        queue.push(n);
      }
    });
  }

  return copy[1];
}

function solve(list: number[][]) {
  return Node.toList(cloneGraph(Node.fromList(list)));
}

var list = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];

console.log(solve(list)); // [[2, 4], [1, 3], [2, 4], [1, 3]];
console.log(solve([[]])); // [[]]
console.log(solve([])); // []
console.log(solve([[2], [1]])); // [[2], [1]]
