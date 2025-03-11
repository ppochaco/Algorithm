const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

class MinHeap {
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
      const parentIndex = Math.floor((index - 1) / 2);

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

    while (index < this.size()) {
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

let index = 0;
let t = Number(input[index++]);
const answer = [];

while (t--) {
  const m = Number(input[index++]);
  let arr = [];

  for (let i = 0; i < Math.ceil(m / 10); i++) {
    arr = [...arr, ...input[index++].split(" ").map(Number)];
  }

  const smallerHeap = new MinHeap();
  const largerHeap = new MinHeap();

  const cnt = Math.floor((m + 1) / 2);
  const median = Array.from({ length: Math.ceil(cnt / 10) }, () => []);
  let line = 0;

  let mid = arr[0];
  median[line].push(mid);

  for (let i = 1; i < m; i++) {
    if (i && i % 20 === 0) line++;

    if (arr[i] < mid) smallerHeap.push(-arr[i]);
    else if (mid <= arr[i]) largerHeap.push(arr[i]);

    if (i % 2 === 0) {
      if (smallerHeap.size() < largerHeap.size()) {
        smallerHeap.push(-mid);
        mid = largerHeap.pop();
      } else if (largerHeap.size() < smallerHeap.size()) {
        largerHeap.push(mid);
        mid = -smallerHeap.pop();
      }

      median[line].push(mid);
    }
  }

  answer.push(cnt);
  answer.push(median.map((nums) => nums.join(" ")).join("\n"));
}

console.log(answer.join("\n"));
