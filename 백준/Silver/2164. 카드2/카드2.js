const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  push(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  pop() {
    const removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }
}

const n = Number(input);
const queue = new Queue();

for (let i = 1; i <= n; i++) {
  queue.push(i);
}

while (queue.size() !== 1) {
  queue.pop();
  queue.push(queue.pop());
}

console.log(queue.pop());
