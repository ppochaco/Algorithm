const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [r, c, m] = input[index++].split(" ").map(Number);
const board = Array.from({ length: r + 1 }, () => Array(c + 1).fill(null));
for (let i = 0; i < m; i++) {
  const [x, y, s, d, z] = input[index++].split(" ").map(Number);
  board[x][y] = { s, d, z };
}

let answer = 0;
for (let i = 1; i <= c; i++) {
  take_fish(i);
  move_all_fish();
}
console.log(answer);

function take_fish(y) {
  for (let x = 1; x <= r; x++) {
    if (board[x][y]) {
      answer += board[x][y].z;
      board[x][y] = null;
      break;
    }
  }
}

function move_fish(x, y, { s, d, z }) {
  const dx = [0, -1, 1, 0, 0];
  const dy = [0, 0, 0, 1, -1];

  if (d === 1 || d === 2) {
    const cycle = (r - 1) * 2;
    s = s % cycle;
    for (let i = 0; i < s; i++) {
      if (x === 1 && d === 1) d = 2;
      else if (x === r && d === 2) d = 1;
      x += dx[d];
    }
  } else {
    const cycle = (c - 1) * 2;
    s = s % cycle;
    for (let i = 0; i < s; i++) {
      if (y === 1 && d === 4) d = 3;
      else if (y === c && d === 3) d = 4;
      y += dy[d];
    }
  }

  return [x, y, s, d, z];
}

function move_all_fish() {
  const fish = [];

  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      if (board[i][j]) {
        fish.push(move_fish(i, j, board[i][j]));
        board[i][j] = null;
      }
    }
  }

  for (let i = 0; i < fish.length; i++) {
    const [x, y, s, d, z] = fish[i];
    if (board[x][y] && z < board[x][y].z) continue;

    board[x][y] = { s, d, z };
  }
}
