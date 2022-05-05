import ListNode from "./ListNode";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const answer = new ListNode();
  var node: ListNode | null = answer;

  while (!lists.every((l) => l == null)) {
    const max = Math.min(...lists.filter((l) => l != null).map((l) => l!.val));
    const idx = lists.findIndex((l) => l != null && l!.val === max);

    node!.next = lists[idx];
    lists[idx] = lists[idx]!.next;
    node = node!.next;
  }
  return answer.next;
}

// -------------

function solve(list: number[][]) {
  return ListNode.toList(mergeKLists(list.map((l) => ListNode.fromList(l))));
}

console.log(
  solve([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
