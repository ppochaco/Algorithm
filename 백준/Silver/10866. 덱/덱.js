const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const command = input;

class Deque {
  constructor() {
    this.storage = new Object();
    this.start = 0;
    this.end = 0;
  }

  push_front(element) {
    if (0 < this.start) {
      this.start--;
    } else {
      for (let i = this.end; i > this.start; i--) {
        this.storage[i] = this.storage[i - 1];
      }

      this.end++;
    }

    this.storage[this.start] = element;
  }

  push_back(element) {
    this.storage[this.end] = element;
    this.end++;
  }

  pop_front() {
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

  pop_back() {
    if (this.end === 0) return -1;

    const removed = this.storage[this.end - 1];
    delete this.storage[this.end - 1];
    this.end--;

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

const deque = new Deque();
const answer = [];

for (let i = 0; i < n; i++) {
  const c = command[i].split(" ");

  if (c[0] === "push_front") {
    deque.push_front(Number(c[1]));
  } else if (c[0] === "push_back") {
    deque.push_back(Number(c[1]));
  } else if (c[0] === "pop_front") {
    answer.push(deque.pop_front());
  } else if (c[0] === "pop_back") {
    answer.push(deque.pop_back());
  } else if (c[0] === "size") {
    answer.push(deque.size());
  } else if (c[0] === "empty") {
    answer.push(deque.empty());
  } else if (c[0] === "front") {
    answer.push(deque.front());
  } else if (c[0] === "back") {
    answer.push(deque.back());
  }
}

console.log(answer.join("\n"));
