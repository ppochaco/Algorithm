const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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

      if (element < this.heap[parentIndex]) break;

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  pop() {
    if (this.size() === 0) return 0;

    if (this.size() === 1) return this.heap.pop();

    this.swap(0, this.size() - 1);

    const removed = this.heap.pop();
    let index = 0;

    while (index < this.size()) {
      let left = index * 2 + 1;
      let right = left + 1;
      let larger = index;

      if (this.heap[left] && this.heap[larger] < this.heap[left]) larger = left;

      if (this.heap[right] && this.heap[larger] < this.heap[right])
        larger = right;

      if (larger !== index) {
        this.swap(larger, index);
        index = larger;
      } else break;
    }

    return removed;
  }
}

const maxHeap = new MaxHeap();

let index = 0;
const n = Number(input[index++]);
const answer = [];

for (let i = 0; i < n; i++) {
  const x = Number(input[index++]);
  if (x === 0) {
    answer.push(maxHeap.pop());
  } else {
    maxHeap.push(x);
  }
}

console.log(answer.join("\n"));
