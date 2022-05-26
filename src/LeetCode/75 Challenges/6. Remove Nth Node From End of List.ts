import ListNode from "./ListNode";

function removeNextNode(head: ListNode | null) {
  const nextNode = head!.next;
  head!.next = nextNode!.next;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  var node = head;
  var length = 0;
  while (node != null) {
    length += 1;
    node = node.next;
  }

  if (n === length) return head!.next;

  var idx = 0;
  node = head;

  while (node != null) {
    if (n === length - idx - 1) removeNextNode(node);
    idx += 1;
    node = node.next;
  }

  return head;
}

function solve(list: number[], n: number): number[] {
  const head = ListNode.fromList(list);
  return ListNode.toList(removeNthFromEnd(head, n));
}

console.log(solve([1, 2, 3, 4, 5], 2)); // [1,2,3,5]
console.log(solve([1], 1)); // []
console.log(solve([1, 2], 1)); // [2]
