const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const n = Number(input);

const dp = Array.from({ length: n + 1 }, () => 0);

function tileCount(width) {
  if (!width) return 1;
  if (width % 2) return 0;
  if (width === 2) return 3;

  if (dp[width] !== 0) return dp[width];

  let cur_count = 3 * tileCount(width - 2);
  for (let i = 4; i <= width; i += 2) {
    cur_count += 2 * tileCount(width - i);
  }

  dp[width] = cur_count;
  return dp[width];
}

console.log(tileCount(n));
