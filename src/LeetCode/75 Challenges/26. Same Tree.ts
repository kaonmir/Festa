import TreeNode from "./TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null && q == null) return true;
  else if (p == null || q == null) return false;
  else if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// ---------------------------------------------

function solve(p_list: (number | null)[], q_list: (number | null)[]): boolean {
  const p = TreeNode.fromList(p_list);
  const q = TreeNode.fromList(q_list);

  return isSameTree(p, q);
}
console.log(solve([1, 2, 1], [1, 1, 2])); // false
console.log(solve([1, 2, 3], [1, 2, 3])); // true
console.log(solve([1, 2], [1, null, 2])); // false
console.log(solve([1, 2], [1, 2])); // true
