import TreeNode from "./TreeNode";

function _lowestCommonAncestor(
  root: TreeNode | null,
  l: number,
  r: number
): TreeNode | null {
  if (root == null) return null;

  const val = root.val;
  if (l === val || val === r) return root;
  else if (l < val && val < r) return root;
  else if (l < val && r < val) return _lowestCommonAncestor(root.left, l, r);
  else return _lowestCommonAncestor(root.right, l, r);
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root == null || p == null || q == null) return null;
  const [l, r] = [Math.min(p.val, q.val), Math.max(p.val, q.val)];
  return _lowestCommonAncestor(root, l, r);
}

// --------------------------------------------------
function solve(list: (number | null)[], p: number, q: number) {
  const root = TreeNode.fromList(list);
  const p_node = TreeNode.traverse(root, p);
  const q_node = TreeNode.traverse(root, q);

  return lowestCommonAncestor(root, p_node, q_node)?.val;
}

console.log(solve([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)); // 6
console.log(solve([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4)); // 2

console.log(solve([2, 1, 3], 3, 1)); // 2
