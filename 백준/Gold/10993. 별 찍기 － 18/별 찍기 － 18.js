const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const n = Number(input);
const r = Math.pow(2, n) - 1;
const c = Math.pow(2, n + 1) - 1;

const arr = Array.from({ length: r }, () => Array(c).fill(" "));

function star(x, y, n) {
  const row = Math.pow(2, n) - 1;
  const col = 2 * row - 1;

  if (n === 1) {
    arr[x][y] = "*";
    return;
  }

  if (n % 2) {
    for (let i = row - 1; i >= 0; i--) {
      arr[x + row - i - 1][y + i] = "*";
      arr[x + row - i - 1][y + col - 1 - i] = "*";

      if (i === 0) {
        for (let j = 1; j < col - 1; j++) {
          arr[x + row - 1][y + j] = "*";
        }
      }
    }

    star(x + Math.pow(2, n - 1) - 1, y + Math.pow(2, n - 1), n - 1);
  } else {
    for (let i = 0; i < row; i++) {
      arr[x + i][y + i] = "*";
      arr[x + i][y + col - 1 - i] = "*";

      if (i === 0) {
        for (let j = 1; j < col - 1; j++) {
          arr[x][y + j] = "*";
        }
      }
    }
    star(x + 1, y + Math.pow(2, n - 1), n - 1);
  }
}

star(0, 0, n);

for (let i = 0; i < r; i++) {
  console.log(arr[i].join("").trimEnd());
}
