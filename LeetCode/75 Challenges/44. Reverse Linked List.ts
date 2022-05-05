import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) return null;

  var node = head!.next;
  var prev_node = head;
  var next_node = node ? node.next : null;

  while (node != null) {
    node.next = prev_node;

    prev_node = node;
    node = next_node;
    next_node = next_node ? next_node.next : null;
  }

  head!.next = null;

  return prev_node;
}

// ----------------------------

function solve(list: number[]) {
  return ListNode.toList(reverseList(ListNode.fromList(list)));
}

console.log(solve([1, 2, 3, 4, 5]));
