const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n")
  .map(Number);

const n = input.shift();
const arr = input;

let cur_num = 2;
const stack = [1];
const answer = ["+"];
for (let i = 0; i < n; i++) {
  while (stack) {
    const stack_top = stack[stack.length - 1];

    if (stack_top === arr[i]) {
      stack.pop();
      answer.push("-");
      break;
    }

    if (cur_num === n + 1) {
      console.log("NO");
      return;
    }

    stack.push(cur_num);
    cur_num++;
    answer.push("+");
  }
}

console.log(answer.join("\n"));
