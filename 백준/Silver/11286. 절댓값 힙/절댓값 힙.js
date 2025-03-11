const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

class Heap {
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

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (Math.abs(this.heap[index]) < Math.abs(this.heap[parentIndex])) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else if (
        Math.abs(this.heap[index]) === Math.abs(this.heap[parentIndex])
      ) {
        if (this.heap[index] <= this.heap[parentIndex]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else break;
      } else break;
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
      let smaller = index;

      if (!this.heap[left]) break;

      if (Math.abs(this.heap[left]) < Math.abs(this.heap[smaller]))
        smaller = left;

      if (
        Math.abs(this.heap[left]) === Math.abs(this.heap[smaller]) &&
        this.heap[left] < this.heap[smaller]
      )
        smaller = left;

      if (this.heap[right]) {
        if (Math.abs(this.heap[right]) < Math.abs(this.heap[smaller]))
          smaller = right;

        if (
          Math.abs(this.heap[right]) === Math.abs(this.heap[smaller]) &&
          this.heap[right] < this.heap[smaller]
        )
          smaller = right;
      }

      if (smaller !== index) {
        this.swap(smaller, index);
        index = smaller;
      } else break;
    }

    return removed;
  }
}

let index = 0;
const n = Number(input[index++]);

const heap = new Heap();
for (let i = 0; i < n; i++) {
  const x = Number(input[index++]);

  if (x === 0) {
    console.log(heap.pop());
  } else {
    heap.push(x);
  }
}
