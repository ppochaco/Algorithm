const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString();

const [n, k] = input.split(" ").map(Number);

const deque = [];
for (let i = 1; i <= n; i++) {
  deque.push(i);
}

const answer = [];

while (deque.length) {
  let pop_push = k - 1;
  while (pop_push) {
    deque.push(deque.shift());
    pop_push--;
  }

  answer.push(deque.shift());
}

console.log("<" + answer.join(", ") + ">");
