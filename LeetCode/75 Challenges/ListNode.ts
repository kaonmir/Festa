export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromList(list: number[], pos: number = -1): ListNode | null {
    if (list.length === 0) return null;

    const nodes: ListNode[] = [];
    list.forEach((v, i) => {
      nodes.push(new ListNode(v));
      if (i !== 0) nodes[i - 1].next = nodes[i];
    });

    if (pos !== -1) nodes[nodes.length - 1].next = nodes[pos];

    return nodes[0];
  }

  static toList(head: ListNode | null, pos: number = -1): number[] {
    const answer: ListNode[] = [];

    var node = head;
    while (node != null) {
      if (pos >= 0 && answer[pos] == node) break;
      answer.push(node);
      node = node!.next;
    }
    return answer.map((k) => k.val);
  }
}
