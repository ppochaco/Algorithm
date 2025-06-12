const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const m = Number(input[index++]);

const vip = [0];
for (let i = 0; i < m; i++) {
  vip.push(Number(input[index++]));
}
vip.push(n + 1);

const dp = Array(n).fill(0);

dp[0] = dp[1] = 1;
for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

let answer = 1;
for (let i = 0; i <= m; i++) {
  answer *= dp[vip[i + 1] - vip[i] - 1];
}

console.log(answer);
