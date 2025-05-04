const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
nums.sort((a, b) => a - b);

let answer = [];

function permutation(cur) {
  if (cur.length === m) {
    answer.push(cur.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    cur.push(nums[i]);

    permutation(cur);
    cur.pop();
  }
}

permutation([]);

console.log(answer.join("\n"));
