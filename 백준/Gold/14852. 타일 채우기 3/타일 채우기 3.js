const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString();

const n = Number(input);
const INF = 1_000_000_007;

const dp = Array.from({ length: Math.max(3, n + 1) }, () => [0, 0]);
dp[0][0] = 1;
dp[1][0] = 2;
dp[2][0] = 7;

for (let i = 3; i <= n; i++) {
  dp[i][1] = (dp[i - 3][0] + dp[i - 1][1]) % INF;
  dp[i][0] = (2 * dp[i - 1][0] + 3 * dp[i - 2][0] + 2 * dp[i][1]) % INF;
}

console.log(dp[n][0]);
