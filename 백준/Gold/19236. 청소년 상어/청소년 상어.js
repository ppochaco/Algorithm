const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = 4;
const board = Array.from({ length: n }, () => Array(n).fill([]));
const fish = Array.from({ length: n * n + 1 }, () => []);

for (let i = 0; i < n; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    board[i][j] = [row[j * 2], row[j * 2 + 1]];
    fish[row[j * 2]] = [i, j, row[j * 2 + 1]];
  }
}

const dx = [-1, -1, -1, 0, 1, 1, 1, 0, -1];
const dy = [1, 0, -1, -1, -1, 0, 1, 1, 1];

let answer = 0;
dfs(0, 0, 0, board, fish);
console.log(answer);

function dfs(nums, x, y, board, fish) {
  const [fish_num, d] = board[x][y];
  board[x][y] = [];
  fish[fish_num] = [];

  nums += fish_num;
  answer = Math.max(answer, nums);

  move_fish([x, y], board, fish);

  for (let i = 1; i < 4; i++) {
    const nx = x + dx[d] * i;
    const ny = y + dy[d] * i;

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

    if (!board[nx][ny].length) continue;

    dfs(
      nums,
      nx,
      ny,
      board.map((b) => b.map((bb) => bb.slice()).slice()),
      fish.map((f) => f.slice())
    );
  }
}

function move_fish(shark, board, fish) {
  for (let i = 1; i <= n * n; i++) {
    if (!fish[i].length) continue;

    const [x, y, d] = fish[i];

    for (let j = 0; j < 8; j++) {
      const nx = x + dx[(d + j) % 8];
      const ny = y + dy[(d + j) % 8];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      if (shark[0] === nx && shark[1] === ny) continue;

      fish[i] = [nx, ny, (d + j) % 8];
      board[x][y][1] = (d + j) % 8;
      if (board[nx][ny].length) {
        const [a, b] = board[nx][ny];
        fish[a] = [x, y, b];
      }

      [board[x][y], board[nx][ny]] = [board[nx][ny], board[x][y]];

      break;
    }
  }
}
