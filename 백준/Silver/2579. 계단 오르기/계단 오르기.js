const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const stairs = [];

for (let i = 0; i < n; i++) {
  stairs.push(Number(input[index++]));
}

const dp = [0 * n];

dp[0] = stairs[0];
dp[1] = dp[0] + stairs[1];
dp[2] = Math.max(stairs[1] + stairs[2], dp[0] + stairs[2]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + stairs[i - 1] + stairs[i],
    dp[i - 2] + stairs[i]
  );
}

console.log(dp[n - 1]);
