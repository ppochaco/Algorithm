const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const nums = input.shift().split(" ").map(Number);

const index = Array.from({ length: n }, () => []);

function find_index(start, end, depth) {
  let mid = Math.floor((start + end) / 2);

  if (depth === n) return;

  index[depth].push(mid);
  find_index(start, mid - 1, depth + 1);
  find_index(mid + 1, end, depth + 1);
}

find_index(0, nums.length - 1, 0);

const answer = [];
for (let i = 0; i < index.length; i++) {
  const level = [];
  for (let j = 0; j < index[i].length; j++) {
    level.push(nums[index[i][j]]);
  }

  answer.push(level.join(" "));
}

console.log(answer.join("\n"));
