const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);

const MAX_NUM = 100;
const board = Array.from(Array(MAX_NUM + 1), () => Array(MAX_NUM + 1).fill(0));
const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

for (let i = 0; i < n; i++) {
  const [y, x, d, g] = input[index++].split(" ").map(Number);
  dragon_curve(x, y, d, g);
}

const squares = get_squares();
console.log(squares);

function dragon_curve(x, y, d, g) {
  board[x][y] = 1;
  let cur_d = [d];
  let next_d = [];

  for (let i = 0; i <= g; i++) {
    for (let j = cur_d.length - 1; j >= 0; j--) {
      x += dx[cur_d[j]];
      y += dy[cur_d[j]];

      next_d.push((cur_d[j] + 1) % 4);

      if (x < 0 || y < 0 || x > MAX_NUM || y > MAX_NUM) continue;

      board[x][y] = 1;
    }

    cur_d = [...next_d];
  }
}

function get_squares() {
  let cnt = 0;

  for (let i = 0; i < MAX_NUM; i++) {
    for (let j = 0; j < MAX_NUM; j++) {
      const points =
        board[i][j] + board[i][j + 1] + board[i + 1][j] + board[i + 1][j + 1];
      if (points === 4) cnt++;
    }
  }

  return cnt;
}
