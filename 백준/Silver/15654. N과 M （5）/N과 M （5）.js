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
const visited = [false * n];

function permutation(index, cur) {
  if (cur.length === m) {
    answer.push(cur.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      cur.push(nums[i]);
      visited[i] = true;
      permutation(i + 1, cur);
      cur.pop();
      visited[i] = false;
    }
  }
}

permutation(0, []);

console.log(answer.join("\n"));
