import TreeNode from "./TreeNode";

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;

  const queue: [TreeNode, number][] = [[root, 1]]; // TreeNode, depth
  var answer = 0;

  while (queue.length !== 0) {
    const p = queue.shift();
    if (!p) throw Error("Error");

    const [t, depth] = p;
    answer = Math.max(answer, depth);
    if (t.left) queue.push([t.left, depth + 1]);
    if (t.right) queue.push([t.right, depth + 1]);
  }

  return answer;
}

// ------------------------------------------------------

function solve(list: (number | null)[]) {
  return maxDepth(TreeNode.fromList(list));
}

console.log(solve([3, 9, 20, null, null, 15, 7])); // 3
console.log(solve([1])); // 1
console.log(solve([])); // 0
