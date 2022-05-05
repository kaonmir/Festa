import TreeNode from "./TreeNode";

function _buildTree(
  parent: TreeNode,
  preorder: number[],
  preorder_index: number,
  leftInorder: number[],
  rightInorder: number[]
): number {
  const leftNextInorderIndex = leftInorder.indexOf(preorder[preorder_index]);
  const rightNextInorderIndex = rightInorder.indexOf(preorder[preorder_index]);

  // 0개가 자식
  if (leftNextInorderIndex === -1 && rightNextInorderIndex === -1)
    return preorder_index;
  // ?
  // 1개가 자식 (left or right)
  // left
  else if (leftNextInorderIndex !== -1) {
    const newNode = new TreeNode(leftInorder[leftNextInorderIndex]);
    parent.left = newNode;
    preorder_index = _buildTree(
      newNode,
      preorder,
      preorder_index + 1,
      leftInorder.slice(0, leftNextInorderIndex),
      leftInorder.slice(leftNextInorderIndex + 1)
    );
  }
  // right
  else if (rightNextInorderIndex !== -1) {
    const newNode = new TreeNode(rightInorder[rightNextInorderIndex]);
    parent.right = newNode;
    preorder_index = _buildTree(
      newNode,
      preorder,
      preorder_index + 1,
      rightInorder.slice(0, rightNextInorderIndex),
      rightInorder.slice(rightNextInorderIndex + 1)
    );
  }

  if (parent.left == null || parent.right != null) return preorder_index;

  // left 만족, right 확인
  const rightNextNextInorderIndex = rightInorder.indexOf(
    preorder[preorder_index]
  );
  if (rightNextNextInorderIndex !== -1) {
    const newNode = new TreeNode(rightInorder[rightNextNextInorderIndex]);
    parent.right = newNode;
    preorder_index = _buildTree(
      newNode,
      preorder,
      preorder_index + 1,
      rightInorder.slice(0, rightNextNextInorderIndex),
      rightInorder.slice(rightNextNextInorderIndex + 1)
    );
  }

  return preorder_index;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);
  _buildTree(
    root,
    preorder,
    1,
    inorder.slice(0, rootIndex),
    inorder.slice(rootIndex + 1)
  );
  return root;
}

// ------------------------------------------------------------

function solve(preList: number[], inList: number[]): (number | null)[] {
  return TreeNode.toList(buildTree(preList, inList));
}

console.log(solve([3, 1, 2, 4], [1, 2, 3, 4])); // [3,1,4,null,2]
console.log(solve([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])); // [3,9,20,null,null,15,7]
console.log(solve([-1], [-1])); // [-1]
