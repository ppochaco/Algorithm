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

let index = 0;
while (deque.length) {
  index += k - 1;
  index %= deque.length;

  const [delete_num] = deque.splice(index, 1);
  answer.push(delete_num);
}

console.log("<" + answer.join(", ") + ">");
