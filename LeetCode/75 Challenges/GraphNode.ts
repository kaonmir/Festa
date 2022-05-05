export default class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }

  static fromList(list: number[][]): GraphNode | null {
    if (list.length === 0) return null;

    const n = Math.max(1, ...list.map((nums) => Math.max(0, ...nums)));
    const nodes: GraphNode[] = new Array(n);
    for (var i = 0; i < nodes.length; i++) nodes[i] = new GraphNode(i + 1);

    list.forEach((nums, idx) => {
      nodes[idx].neighbors = nums.map((v) => nodes[v - 1]);
    });

    return nodes[0];
  }

  static toList(node: GraphNode | null): number[][] {
    if (node == null) return [];
    const nodes: Record<number, GraphNode> = {};
    const queue: GraphNode[] = [node];
    const answer: Record<number, number[]> = {};

    nodes[1] = node;

    while (queue.length !== 0) {
      const t = queue.shift();
      if (t == null) throw Error("Error");

      answer[t.val!] = t.neighbors.map((n) => n!.val!);
      queue.push(...t.neighbors.filter((n) => nodes[n.val!] == null));
      t.neighbors.forEach((n) => (nodes[n.val] = n));
    }

    return Object.keys(answer)
      .sort()
      .map((k) => answer[Number.parseInt(k)]);
  }
}
