const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
const nums = input[index++].split(" ").map(Number);

const nums_sum = [0];
let cur = 0;
for (let i = 0; i < n; i++) {
  cur += nums[i];
  nums_sum.push(cur);
}

const answer = [];
for (let i = 0; i < m; i++) {
  const [start, end] = input[index++].split(" ").map(Number);
  answer.push(nums_sum[end] - nums_sum[start - 1]);
}

console.log(answer.join("\n"));
