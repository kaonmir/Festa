import ListNode from "./ListNode";

// ? are the values of Linked Lists are unique

function hasCycle(head: ListNode | null): boolean {
  const nodes: ListNode[] = [];

  var node = head;
  while (node != null) {
    if (nodes.includes(node)) return true;
    nodes.push(node);
    node = node!.next;
  }
  return false;
}

function solve(list: number[], pos: number) {
  const head = ListNode.fromList(list, pos);

  return hasCycle(head);
}

console.log(solve([3, 2, 0, -4], 1)); // true
console.log(solve([1, 2], 0)); // true
console.log(solve([1], -1)); // false
