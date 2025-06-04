const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

const MAX_NUMBER = 20;
const dp = Array.from({ length: n - 1 }, () =>
  Array(MAX_NUMBER + 1).fill(BigInt(0))
);

dp[0][nums[0]] = BigInt(1);
for (let i = 1; i < n - 1; i++) {
  for (let j = 0; j <= MAX_NUMBER; j++) {
    if (!dp[i - 1][j]) continue;

    if (j - nums[i] >= 0) {
      dp[i][j - nums[i]] += BigInt(dp[i - 1][j]);
    }
    if (j + nums[i] <= 20) {
      dp[i][j + nums[i]] += BigInt(dp[i - 1][j]);
    }
  }
}
console.log(dp[n - 2][nums[n - 1]].toString());
