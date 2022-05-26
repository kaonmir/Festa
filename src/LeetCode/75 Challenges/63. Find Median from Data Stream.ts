class MedianFinder {
  list: number[] = [];
  constructor() {}

  addNum(num: number): void {
    this.list = [...this.list, num].sort((a, b) => a - b);
  }

  findMedian(): number {
    const ceil = Math.ceil((this.list.length - 1) / 2);
    const floor = Math.floor((this.list.length - 1) / 2);
    const answer = (this.list[floor] + this.list[ceil]) / 2;

    return answer;
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
