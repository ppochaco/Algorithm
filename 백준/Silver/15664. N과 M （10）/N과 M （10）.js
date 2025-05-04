const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
nums.sort((a, b) => a - b);

let answer = new Set();

function combination(index, cur) {
  if (cur.length === m) {
    answer.add(cur.join(" "));
    return;
  }

  for (let i = index; i < n; i++) {
    cur.push(nums[i]);
    combination(i + 1, cur);
    cur.pop();
  }
}

combination(0, []);

answer = [...answer];
console.log(answer.join("\n"));
