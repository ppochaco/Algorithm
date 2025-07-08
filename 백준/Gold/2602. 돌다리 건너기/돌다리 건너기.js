const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const roll = input[0];
const devil = input[1];
const angel = input[2];

const r = roll.length;
const n = devil.length;

const devilDP = Array.from({ length: n }, () =>
  Array.from({ length: r }, () => 0)
);
const angelDP = Array.from({ length: n }, () =>
  Array.from({ length: r }, () => 0)
);

for (let i = 0; i < n; i++) {
  if (devil[i] === roll[0]) devilDP[i][0] = 1;
  if (angel[i] === roll[0]) angelDP[i][0] = 1;
}

for (let i = 0; i < n; i++) {
  for (let j = 1; j < r; j++) {
    if (roll[j] === devil[i]) {
      for (let k = 0; k < i; k++) {
        devilDP[i][j] += angelDP[k][j - 1];
      }
    }

    if (roll[j] === angel[i]) {
      for (let k = 0; k < i; k++) {
        angelDP[i][j] += devilDP[k][j - 1];
      }
    }
  }
}

const answer =
  devilDP.reduce((sum, row) => sum + row[r - 1], 0) +
  angelDP.reduce((sum, row) => sum + row[r - 1], 0);

console.log(answer);
