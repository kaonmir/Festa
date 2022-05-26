import TreeNode from "./TreeNode";

function _lowestCommonAncestor(
  root: TreeNode | null,
  l: number,
  r: number
): TreeNode | null {
  if (root == null) return null;
  const val = root.val;
  const isRootTarget = val === l || val === r;

  const left = _lowestCommonAncestor(root.left, l, r);
  const right = _lowestCommonAncestor(root.right, l, r);

  if (left && right) return root;
  else if ((left || right) && isRootTarget) return root;
  else return left ?? right ?? (isRootTarget ? root : null);
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

console.log(solve([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1)); // 3
console.log(solve([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4)); // 5
console.log(solve([1, 2], 1, 2)); // 1
