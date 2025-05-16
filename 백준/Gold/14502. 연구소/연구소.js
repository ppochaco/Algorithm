const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

const safe_zone = [];
const virus_zone = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 0) {
      safe_zone.push([i, j]);
    } else if (board[i][j] === 2) {
      virus_zone.push([i, j]);
    }
  }
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let answer = 0;

make_wall(0, 0);
console.log(answer);

function count_safe_zone(board) {
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) cnt++;
    }
  }

  return cnt;
}

function spread_virus(board) {
  const queue = [];
  for (let i = 0; i < virus_zone.length; i++) {
    queue.push(virus_zone[i]);
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (board[nx][ny]) continue;

      board[nx][ny] = 2;
      queue.push([nx, ny]);
    }
  }

  return board;
}

function make_wall(cnt, start) {
  if (cnt === 3) {
    const cur_board = board.map((b) => b.slice());
    const virus_board = spread_virus(cur_board);

    answer = Math.max(answer, count_safe_zone(virus_board));

    return;
  }

  for (let i = start; i < safe_zone.length; i++) {
    const [x, y] = safe_zone[i];

    if (x < 0 || y < 0 || x >= n || y >= m) continue;

    if (board[x][y]) continue;

    board[x][y] = 1;
    make_wall(cnt + 1, i + 1);
    board[x][y] = 0;
  }
}
