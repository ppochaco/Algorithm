const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const command = input;

class Queue {
  constructor() {
    this.storage = new Object();
    this.start = 0;
    this.end = 0;
  }

  push(element) {
    this.storage[this.end] = element;
    this.end++;
  }

  pop() {
    if (this.end === 0) return -1;

    const removed = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;

    if (this.start === this.end) {
      this.start = 0;
      this.end = 0;
    }

    return removed;
  }

  size() {
    return this.end - this.start;
  }

  empty() {
    if (this.end === 0) return 1;

    return 0;
  }

  front() {
    if (this.end === 0) return -1;

    return this.storage[this.start];
  }

  back() {
    if (this.end === 0) return -1;

    return this.storage[this.end - 1];
  }
}

const queue = new Queue();
const answer = [];
for (let i = 0; i < n; i++) {
  const c = command[i].split(" ");

  if (c[0] === "push") {
    queue.push(c[1]);
  } else if (c[0] === "pop") {
    answer.push(queue.pop());
  } else if (c[0] === "size") {
    answer.push(queue.size());
  } else if (c[0] === "empty") {
    answer.push(queue.empty());
  } else if (c[0] === "front") {
    answer.push(queue.front());
  } else if (c[0] === "back") {
    answer.push(queue.back());
  }
}

console.log(answer.join("\n"));
