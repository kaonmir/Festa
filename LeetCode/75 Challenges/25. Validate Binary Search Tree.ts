import TreeNode from "./TreeNode";

type T = [number | null, number | null, boolean]; // [min, max, isError]

function traverse(root: TreeNode | null): T {
  if (root == null) return [null, null, false];

  const l = traverse(root.left);
  if (l[2]) return l;
  const r = traverse(root.right);
  if (r[2]) return r;

  if (l[1] != null && root.val! <= l[1]) return [null, null, true];
  else if (r[0] != null && r[0] <= root.val!) return [null, null, true];
  else return [l[0] ?? root.val!, r[1] ?? root.val!, false];
}

function isValidBST(root: TreeNode | null): boolean {
  const [_, __, answer] = traverse(root);
  return !answer;
}

// ------------------------------------------------------------

function solve(list: (number | null)[]) {
  return isValidBST(TreeNode.fromList(list));
}

console.log(solve([5, 1, 4, null, null, 3, 6])); // false
console.log(solve([2, 1, 3])); // true
