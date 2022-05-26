import TreeNode from "./TreeNode";

function fromList(list: (number | null)[]) {
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

function toList(root: TreeNode | null): (number | null)[] {
  if (root == null) return [];

  const queue: (TreeNode | null)[] = [root];
  const answer: (number | null)[] = [root.val];

  while (queue.length !== 0) {
    const t = queue.shift();
    if (t == null) continue;

    answer.push(t.left ? t.left.val : null, t.right ? t.right.val : null);
    queue.push(t.left, t.right);
  }

  while (1) {
    const t = answer.pop();
    if (t != null) {
      answer.push(t);
      break;
    }
  }

  return answer;
}

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  return JSON.stringify(toList(root));
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  return fromList(JSON.parse(data));
}

// -------------------------------------------------------

console.log(toList(deserialize(serialize(fromList([2, 1, 3])))));
console.log(toList(deserialize(serialize(fromList([])))));
