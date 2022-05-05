import TreeNode from "./TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;

  const t = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = t;

  return root;
}

// --------------------------------------------------------

function solve(list: number[]) {
  return TreeNode.toList(invertTree(TreeNode.fromList(list)));
}

console.log(solve([4, 2, 7, 1, 3, 6, 9])); // [4,7,2,9,6,3,1]
console.log(solve([2, 1, 3])); // [2,3,1]
