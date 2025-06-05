const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const a = input[0];
const b = input[1];

const dp = Array.from({ length: a.length + 1 }, () =>
  Array(b.length + 1).fill(0)
);

for (let i = 1; i <= a.length; i++) {
  for (let j = 1; j <= b.length; j++) {
    if (a[i - 1] === b[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[a.length][b.length]);
