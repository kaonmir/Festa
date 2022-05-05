import TreeNode from "./TreeNode";

/**
 * @returns [value, count]
 */
function traverse(root: TreeNode | null, k: number): [number, number] {
  if (root == null) return [0, 0];

  const [value, count] = traverse(root.left, k);
  if (count >= k) return [value, count];
  else if (count + 1 === k) return [root.val, 2e9];
  else {
    const [v, c] = traverse(root.right, k - count - 1);
    return [v, c + count + 1];
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  const [value, _] = traverse(root, k);
  return value;
}

console.log(kthSmallest(TreeNode.fromList([3, 1, 4, null, 2]), 1)); // 1
console.log(kthSmallest(TreeNode.fromList([5, 3, 6, 2, 4, null, null, 1]), 3)); // 3
