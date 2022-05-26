import ListNode from "../Data Structure/ListNode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const head = new ListNode();

  let node = head;
  let isRegroup = false;
  while (l1 !== null || l2 !== null) {
    const val: number = (l1?.val || 0) + (l2?.val || 0) + (isRegroup ? 1 : 0);
    const newNode = new ListNode(val % 10);

    node.next = newNode;
    isRegroup = val >= 10;
    node = node.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  if (isRegroup) node.next = new ListNode(1);

  return head.next;
}

let _l1: ListNode | null;
let _l2: ListNode | null;

_l1 = ListNode.fromList([2, 4, 3]);
_l2 = ListNode.fromList([5, 6, 4]);
console.log(ListNode.toList(addTwoNumbers(_l1, _l2)));

_l1 = ListNode.fromList([9, 9, 9, 9, 9, 9, 9]);
_l2 = ListNode.fromList([9, 9, 9, 9]);
console.log(ListNode.toList(addTwoNumbers(_l1, _l2)));
