const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    let tmp = this.heap[a];

    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  push(element) {
    if (this.size() === 0) {
      this.heap.push(element);
      return;
    }

    this.heap.push(element);
    let index = this.size() - 1;

    while (0 < index) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] < this.heap[index]) break;

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  pop() {
    if (this.size() === 0) return;

    if (this.size() === 1) return this.heap.pop();

    this.swap(0, this.size() - 1);
    const removed = this.heap.pop();

    let index = 0;
    while (index < this.size() - 1) {
      let left = index * 2 + 1;
      let right = left + 1;
      let smaller = index;

      if (this.heap[left] && this.heap[left] < this.heap[smaller])
        smaller = left;

      if (this.heap[right] && this.heap[right] < this.heap[smaller])
        smaller = right;

      if (smaller !== index) {
        this.swap(smaller, index);
        index = smaller;
      } else break;
    }

    return removed;
  }
}

let t = -1;
let n = 0;
const minHeap = new MinHeap();

rl.on("line", (line) => {
  if (t === -1) {
    t = Number(line);
    n = t;
    return;
  }

  line.split(" ").forEach((value) => {
    minHeap.push(Number(value));
    if (minHeap.size() > n) minHeap.pop();
  });

  t--;

  if (t === 0) rl.close();
}).on("close", () => {
  console.log(minHeap.pop());
  process.exit();
});
