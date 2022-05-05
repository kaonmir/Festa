import TreeNode from "./TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];

  const queue: [TreeNode, number][] = [[root, 0]]; // TreeNode, depth
  const answer: number[][] = [[root!.val]];

  while (queue.length !== 0) {
    const p = queue.shift();
    if (p) throw Error("Error");

    const [t, depth] = p;
    if ((t.left || t.right) && !answer[depth + 1]) answer.push([]);
    if (t.left) {
      queue.push([t.left, depth + 1]);
      answer[depth + 1].push(t.left.val);
    }
    if (t.right) {
      queue.push([t.right, depth + 1]);
      answer[depth + 1].push(t.right.val);
    }
  }

  return answer;
}

// ------------------------------------------------------

function solve(list: (number | null)[]) {
  return levelOrder(TreeNode.fromList(list));
}
console.log(solve([3, 9, 20, null, null, 15, 7])); // [[3],[9,20],[15,7]]
console.log(solve([1])); // [[1]]
console.log(solve([])); // []
