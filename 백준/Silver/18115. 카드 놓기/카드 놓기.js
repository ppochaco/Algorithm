const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const arr = input.shift().split(" ").map(Number).reverse();

class Deque {
  constructor() {
    this.storage = new Object();
    this.start = 1_000_000;
    this.rear = 1_000_000;
  }

  shift(element) {
    this.start--;
    this.rear++;

    this.storage[this.start] = element;
  }

  push(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  unshift() {
    const removed = this.storage[this.start];
    delete this.storage[this.start];

    this.start++;

    if (this.start === this.rear) {
      this.start = this.rear = 1_000_000;
    }

    return removed;
  }
}

const deque = new Deque();

for (let i = 0; i < n; i++) {
  const command = arr[i];

  if (command === 1) {
    deque.shift(i + 1);
  } else if (command == 2) {
    const first = deque.unshift(i + 1);
    deque.shift(i + 1);
    deque.shift(first);
  } else {
    deque.push(i + 1);
  }
}

const answer = Object.keys(deque.storage).map((key) => deque.storage[key]);
console.log(answer.join(" "));
