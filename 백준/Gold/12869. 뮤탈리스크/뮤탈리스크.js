const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input[0]);
const scv = input[1].split(" ").map(Number);

const maxHealth = Math.max(...scv) + 1;
const dp = Array.from(Array(maxHealth), () =>
  Array.from(Array(maxHealth), () => Array(maxHealth).fill(Infinity))
);
const dealing = [
  [9, 3, 1],
  [9, 1, 3],
  [3, 9, 1],
  [3, 1, 9],
  [1, 9, 3],
  [1, 3, 9],
];

while (scv.length !== 3) {
  scv.push(0);
}

const answer = dfs(scv);
console.log(answer);

function dfs(scvs) {
  const [a, b, c] = scvs.map((s) => Math.max(0, s));

  // 모두 0이면
  if (!(a + b + c)) {
    return 0;
  }

  let cnt = dp[a][b][c];
  if (cnt !== Infinity) return cnt;

  for (const [dealA, dealB, dealC] of dealing) {
    cnt = Math.min(cnt, dfs([a - dealA, b - dealB, c - dealC]) + 1);
  }
  dp[a][b][c] = cnt;

  return cnt;
}
