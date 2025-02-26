const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = input.shift();
const command = input;

class Stack {
  constructor() {
    this.storage = new Object();
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    if (!this.size) return -1;

    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;

    return removed;
  }

  empty() {
    if (!this.size) return 1;
    return 0;
  }

  top() {
    if (!this.size) return -1;

    return this.storage[this.size];
  }
}

const stack = new Stack();

const answer = [];
for (let i = 0; i < n; i++) {
  const c = command[i].split(" ");
  if (c[0] === "push") {
    stack.push(Number(c[1]));
  } else {
    if (c[0] === "pop") {
      answer.push(stack.pop());
    }
    if (c[0] === "top") {
      answer.push(stack.top());
    }
    if (c[0] === "empty") {
      answer.push(stack.empty());
    }
    if (c[0] === "size") {
      answer.push(stack.size);
    }
  }
}

console.log(answer.join("\n"));
