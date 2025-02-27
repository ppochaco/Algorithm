const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = input.shift();
const postfix = input.shift();
const nums = input.map(Number);

const stack = [];
for (let i = 0; i < postfix.length; i++) {
  const cur = postfix[i];

  if (/[A-Z]/.test(cur)) {
    const index = cur.charCodeAt() - "A".charCodeAt();
    stack.push(nums[index]);
  } else {
    const b = stack.pop();
    const a = stack.pop();

    if (cur === "*") {
      stack.push(a * b);
    } else if (cur === "/") {
      stack.push(a / b);
    } else if (cur === "+") {
      stack.push(a + b);
    } else {
      stack.push(a - b);
    }
  }
}

const answer = stack.pop();

console.log(answer.toFixed(2));
