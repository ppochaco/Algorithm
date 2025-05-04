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
const visited = [false * n];

function permutation(cur) {
  if (cur.length === m) {
    answer.add(cur.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      cur.push(nums[i]);
      permutation(cur);
      cur.pop();
      visited[i] = false;
    }
  }
}

permutation([]);

answer = [...answer];
console.log(answer.join("\n"));
