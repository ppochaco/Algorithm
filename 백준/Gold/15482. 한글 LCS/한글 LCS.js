const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const a = input[0];
const b = input[1];

const dp = Array(b.length).fill(0);

let cnt = 0;
for (let i = 0; i < a.length; i++) {
  cnt = 0;
  for (let j = 0; j < b.length; j++) {
    if (cnt < dp[j]) {
      cnt = dp[j];
    } else if (a[i] === b[j]) {
      dp[j] = cnt + 1;
    }
  }
}

console.log(Math.max(...dp));
