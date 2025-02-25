const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const nums = input.shift().split(" ").map(Number);

const stack = [];
const answer = [];
for (let i = 0; i < n; i++) {
  const cur_tower = {
    index: i + 1,
    num: nums[i],
  };

  let receiving_tower = 0;
  while (stack.length) {
    const stack_top_tower = stack[stack.length - 1];
    if (cur_tower.num < stack_top_tower.num) {
      receiving_tower = stack_top_tower.index;
      break;
    }

    stack.pop();
  }

  answer.push(receiving_tower);
  stack.push(cur_tower);
}

console.log(answer.join(" "));
