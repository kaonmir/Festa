export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static fromList(list: (number | null)[]): TreeNode | null {
    if (list.length === 0) return null;

    const root = new TreeNode(list[0]!);
    const queue: TreeNode[] = [root];
    for (var i = 1; i < list.length; i += 2) {
      const t = queue.shift();

      if (list[i] != null) {
        t!.left = new TreeNode(list[i] as number);
        queue.push(t!.left);
      } else t!.left = null;

      if (i + 1 < list.length && list[i + 1] != null) {
        t!.right = new TreeNode(list[i + 1] as number);
        queue.push(t!.right);
      } else t!.right = null;
    }
    return root;
  }

  static toList(root: TreeNode | null): (number | null)[] {
    if (root == null) return [];

    const queue: (TreeNode | null)[] = [root];
    const answer: (number | null)[] = [root.val];

    while (queue.length !== 0) {
      const t = queue.shift();
      if (t == null) continue;

      answer.push(t.left ? t.left.val : null, t.right ? t.right.val : null);
      queue.push(t.left, t.right);
    }

    var i: number;
    for (i = answer.length - 1; i >= 0; i--) if (answer[i] != null) break;
    return answer.slice(0, i + 1);
  }

  static traverse(root: TreeNode | null, value: number): TreeNode | null {
    if (root == null) return null;
    else if (root.val === value) return root;

    return (
      TreeNode.traverse(root.left, value) ??
      TreeNode.traverse(root.right, value)
    );
  }
}
