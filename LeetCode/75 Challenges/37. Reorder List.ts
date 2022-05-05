import ListNode from "./ListNode";

function insertNode(head: ListNode | null, node: ListNode | null) {
  node!.next = head!.next;
  head!.next = node;
}
function reorderList(head: ListNode | null): void {
  var length = 0;
  var node = head;
  while (node != null) {
    length += 1;
    node = node.next;
  }

  const half = Math.ceil(length / 2);
  const nodeArr = new Array(length);
  node = head;
  for (var i = 0; i < length; i++) {
    nodeArr[i] = node;
    node = node!.next;
  }

  var offset = length % 2 === 0 ? half - 2 : half - 2;
  for (var i = half; i < length; i++) {
    if (i === half && length % 2 === 0) continue;
    insertNode(nodeArr[offset], nodeArr[i]);

    if (i === half || (i === half + 1 && length % 2 === 0))
      if (length % 2 === 1) nodeArr[i]!.next!.next = null;
      else nodeArr[i]!.next!.next!.next = null;

    offset -= 1;
  }
}

// --------------------------------------------------

function solve(list: number[]): number[] {
  const head = ListNode.fromList(list);
  reorderList(head);
  return ListNode.toList(head);
}

console.log(solve([1, 2, 3, 4, 5]));
console.log(solve([1, 2, 3, 4]));
