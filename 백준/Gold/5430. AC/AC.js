const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
let t = Number(input[index++]);

class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
    this.reverse = false;
  }

  size() {
    return this.rear - this.front;
  }

  push(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  pop() {
    if (this.rear === 0) return undefined;

    if (this.reverse) {
      this.rear--;
      let removed = this.storage[this.rear];
      delete this.storage[this.rear];

      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;
      }

      return removed;
    }

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
  number = n
    ? number
        .slice(1, number.length - 1)
        .split(",")
        .map(Number)
    : [];

  console.log(AC(p, number, n));
}

function AC(p, number, n) {
  let queue = new Queue();

  for (let i = 0; i < n; i++) {
    queue.push(number[i]);
  }

  for (let i = 0; i < p.length; i++) {
    const command = p[i];

    if (command == "R") {
      queue.reverse = !queue.reverse;
    } else if (command == "D") {
      if (queue.pop() === undefined) {
        return "error";
      }
    }
  }

  let result = "";
  if (queue.reverse) {
    for (let i = queue.rear - 1; i >= queue.front; i--) {
      result += queue.storage[i].toString() + ",";
    }
  } else {
    for (let i = queue.front; i < queue.rear; i++) {
      result += queue.storage[i].toString() + ",";
    }
  }

  result = "[" + result.slice(0, -1) + "]";

  return result;
}
