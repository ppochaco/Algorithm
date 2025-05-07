const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const n = Number(input);
const stairs = Array.from({ length: n }, () => Array(10).fill(0));
const MOD = 1_000_000_000;
let answer = 0;

for (let i = 1; i < 10; i++) {
  stairs[0][i] = 1;
}

for (let i = 1; i < n; i++) {
  stairs[i][0] = stairs[i - 1][1] % MOD;

  for (let j = 1; j < 9; j++) {
    stairs[i][j] = stairs[i - 1][j - 1] + (stairs[i - 1][j + 1] % MOD);
  }

  stairs[i][9] = stairs[i - 1][8] % MOD;
}

for (let i = 0; i < 10; i++) {
  answer += stairs[n - 1][i] % MOD;
}

console.log(answer % MOD);
