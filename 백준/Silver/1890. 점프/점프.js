const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

const dp = Array.from({ length: n }, () => Array(n).fill(BigInt(0)));
dp[0][0] = 1;

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (board[x][y] === 0) continue;

    const nx = x + board[x][y];
    if (nx < n) {
      dp[nx][y] += BigInt(dp[x][y]);
    }

    const ny = y + board[x][y];
    if (ny < n) {
      dp[x][ny] += BigInt(dp[x][y]);
    }
  }
}

console.log(dp[n - 1][n - 1].toString());
