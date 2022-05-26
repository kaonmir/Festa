import ListNode from "./ListNode";

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 == null && l2 == null) return null;

  const head = new ListNode();
  var node: ListNode | null = head;

  while (l1 != null || l2 != null) {
    if (l2 == null || (l1 ? l1.val : Infinity) <= l2.val) {
      const next_node = l1!.next;
      node!.next = l1;
      l1 = next_node;
    } else if (l1 == null || l1.val > l2.val) {
      const next_node = l2!.next;
      node!.next = l2;
      l2 = next_node;
    }
    node = node!.next;
  }

  return head.next;
}

// --------------------------------------------------

function solve(listA: number[], listB: number[]) {
  const l1 = ListNode.fromList(listA);
  const l2 = ListNode.fromList(listB);
  return ListNode.toList(mergeTwoLists(l1, l2));
}

console.log(solve([1, 2, 4], [1, 3, 4])); //[1,1,2,3,4,4]
