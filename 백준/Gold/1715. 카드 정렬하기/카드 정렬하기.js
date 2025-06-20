const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);

class PriorityQueue {
  constructor(f) {
    this.heap = [];
    this.compare = f;
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

      if (this.compare(this.heap[parentIndex], this.heap[index]) < 0) break;

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

      if (
        this.heap[left] &&
        this.compare(this.heap[left], this.heap[smaller]) < 0
      )
        smaller = left;

      if (
        this.heap[right] &&
        this.compare(this.heap[right], this.heap[smaller]) < 0
      )
        smaller = right;

      if (smaller !== index) {
        this.swap(smaller, index);
        index = smaller;
      } else break;
    }

    return removed;
  }
}

const queue = new PriorityQueue((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

for (let i = 0; i < n; i++) {
  queue.push([Number(input[index++]), 0]);
}

let answer = 0;
let t = 1;

while (true) {
  if (t === n) break;
  const [a_num, a_cnt] = queue.pop();
  const [b_num, b_cnt] = queue.pop();

  queue.push([a_num + b_num, Math.max(a_cnt, b_cnt) + 1]);

  answer += a_num + b_num;
  t++;
}

console.log(answer);
