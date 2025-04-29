const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
let t = Number(input[index++]);

class Deque {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
    this.reverse = false;
  }

  push(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  shift() {
    if (this.rear === this.front) return undefined;

    this.rear--;
    let removed = this.storage[this.rear];
    delete this.storage[this.rear];

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }

  pop() {
    if (this.rear === this.front) return undefined;

    let removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }
}

while (t--) {
  const p = input[index++];
  const n = Number(input[index++]);
  let number = input[index++];
  number = number.slice(1, number.length - 1).split(",");

  console.log(AC(p, number, n));
}

function AC(p, number, n) {
  let deque = new Deque();

  for (let i = 0; i < n; i++) {
    deque.push(number[i]);
  }

  for (let i = 0; i < p.length; i++) {
    const command = p[i];

    if (command == "R") {
      deque.reverse = !deque.reverse;
    } else if (command == "D") {
      const removed = deque.reverse ? deque.shift() : deque.pop();

      if (removed === undefined) {
        return "error";
      }
    }
  }

  let result = [];
  if (deque.reverse) {
    for (let i = deque.rear - 1; i >= deque.front; i--) {
      result.push(deque.storage[i]);
    }
  } else {
    for (let i = deque.front; i < deque.rear; i++) {
      result.push(deque.storage[i]);
    }
  }

  result = "[" + result.join(",") + "]";

  return result;
}
