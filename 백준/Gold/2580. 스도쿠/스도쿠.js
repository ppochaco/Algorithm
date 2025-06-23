const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = 9;
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input.shift().split(" ").map(Number));
}

const row = Array.from({ length: n }, () => new Set());
const col = Array.from({ length: n }, () => new Set());
const square = Array.from({ length: n }, () => new Set());

const zero = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j]) {
      row[i].add(board[i][j]);
      col[j].add(board[i][j]);
      square[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(board[i][j]);
    } else {
      zero.push([i, j]);
    }
  }
}

let check = false;
dfs(0);

function dfs(index) {
  if (check) return;

  if (index === zero.length) {
    check = true;
    for (let i = 0; i < n; i++) {
      console.log(board[i].join(" "));
    }

    return;
  }

  const [x, y] = zero[index];
  for (let i = 1; i <= n; i++) {
    if (row[x].has(i)) continue;
    if (col[y].has(i)) continue;
    if (square[Math.floor(x / 3) * 3 + Math.floor(y / 3)].has(i)) continue;

    board[x][y] = i;
    row[x].add(i);
    col[y].add(i);
    square[Math.floor(x / 3) * 3 + Math.floor(y / 3)].add(i);
    dfs(index + 1);
    board[x][y] = 0;
    row[x].delete(i);
    col[y].delete(i);
    square[Math.floor(x / 3) * 3 + Math.floor(y / 3)].delete(i);
  }
}
