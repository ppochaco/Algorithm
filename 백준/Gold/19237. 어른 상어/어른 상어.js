const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m, k] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}
const start_direction = input[index++].split(" ").map((d) => Number(d) - 1);

const direction = Array.from({ length: m + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  for (let j = 0; j < 4; j++) {
    direction[i].push(input[index++].split(" ").map((d) => Number(d) - 1));
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let shark = Array.from({ length: m + 1 }, () => []);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const shark_number = board[i][j];
    if (shark_number !== 0) {
      shark[shark_number] = [i, j, start_direction[shark_number - 1]];
      board[i][j] = [shark_number, k];
    } else {
      board[i][j] = [];
    }
  }
}

let time = 0;
while (true) {
  if (time === 1000) {
    time = -1;
    break;
  }

  move_sharks();

  time++;

  if (is_shark_alone()) {
    break;
  }
}

console.log(time);

function is_shark_alone() {
  for (let i = 2; i <= m; i++) {
    if (shark[i].length) return false;
  }
  return true;
}

function move_sharks() {
  const next_board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => [])
  );

  for (let shark_number = 1; shark_number <= m; shark_number++) {
    if (!shark[shark_number].length) continue;

    const [nx, ny, nd] = move_one_shark(shark_number);
    next_board[nx][ny].push([shark_number, k, nd]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j].length) {
        const [number, t] = board[i][j];
        if (0 < t - 1) {
          next_board[i][j].push([number, t - 1, -1]);
        } else {
          board[i][j] = [];
        }
      }
    }
  }

  shark = Array.from({ length: m + 1 }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const arr = next_board[i][j];
      if (arr.length) {
        arr.sort((a, b) => {
          if (a[0] === b[0]) return b[1] - a[1];
          return a[0] - b[0];
        });

        const [number, t, d] = next_board[i][j][0];
        board[i][j] = [number, t];
        if (t === k) shark[number] = [i, j, d];
      }
    }
  }
}

function move_one_shark(number) {
  const [x, y, d] = shark[number];

  for (const nd of direction[number][d]) {
    const nx = x + dx[nd];
    const ny = y + dy[nd];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

    if (board[nx][ny].length) continue;

    return [nx, ny, nd];
  }

  for (const nd of direction[number][d]) {
    const nx = x + dx[nd];
    const ny = y + dy[nd];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

    if (board[nx][ny][0] !== number) continue;

    return [nx, ny, nd];
  }
}
