import TreeNode from "./TreeNode";

function searchTree(
  root: TreeNode | null,
  target: number | null
): (TreeNode | null)[] {
  if (root == null || target == null) return [];
  const answer = [];

  if (root.val === target) answer.push(root);
  answer.push(...searchTree(root.left, target));
  answer.push(...searchTree(root.right, target));

  return answer;
}

function compareTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root == null && subRoot == null) return true;
  else if (root == null || subRoot == null) return false;
  else if (root.val !== subRoot.val) return false;

  return (
    compareTree(root.left, subRoot.left) &&
    compareTree(root.right, subRoot.right)
  );
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root == null || subRoot == null) return false;
  const nodes = searchTree(root, subRoot.val);
  return nodes.some((h) => compareTree(h, subRoot));
}

// ----------------------------

function solve(listA: (number | null)[], listB: (number | null)[]) {
  return isSubtree(TreeNode.fromList(listA), TreeNode.fromList(listB));
}

console.log(solve([3, 4, 5, 1, 2], [4, 1, 2])); // true
console.log(solve([3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2])); // false
