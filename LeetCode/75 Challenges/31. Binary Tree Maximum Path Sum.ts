import TreeNode from "./TreeNode";
// max from left children, max from right children
// max when the node is a root
type T = {
  max: number;
  opened: number;
};

function maxPathSumFromRoot(root: TreeNode | null): T {
  if (root == null) return { max: -Infinity, opened: -Infinity };

  const l = maxPathSumFromRoot(root.left);
  const r = maxPathSumFromRoot(root.right);

  const temp = Math.max(l.opened, r.opened);
  const opened = Math.max(temp + root.val, root.val);
  const max = Math.max(opened, l.max, r.max, l.opened + r.opened + root.val);

  return { opened, max };
}

function maxPathSum(root: TreeNode | null): number {
  const { max } = maxPathSumFromRoot(root);
  return max;
}

// --------------------------------------------
function solve(list: (number | null)[]) {
  return maxPathSum(TreeNode.fromList(list));
}
console.log(solve([1, 2, 3])); // 6
console.log(solve([-10, 9, 20, null, null, 15, 7])); // 42
console.log(solve([1, -2, -3, 1, 3, -2, null, -1])); // 3
/* 
       1
   -2     -3
  1  3  -2 
-1
*/
