const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [r, c] = [12, 6];
let index = 0;
const board = [];
for (let i = 0; i < r; i++) {
  board.push(input[index++].split(""));
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let answer = 0;

while (true) {
  const visited = Array.from({ length: r }, () => Array(c).fill(false));
  const candidate = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] !== "." && board[i][j] !== "!" && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  if (!candidate.length) break;

  candidate.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  for (let i = 0; i < candidate.length; i++) {
    const [x, y] = candidate[i];

    for (let j = x; j > 0; j--) {
      board[j][y] = board[j - 1][y];
    }
    board[0][y] = ".";
  }

  answer++;

  function bfs(x, y) {
    const queue = [[x, y]];
    const color = board[x][y];

    const stack = [];

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;

        if (visited[nx][ny]) continue;

        if (board[nx][ny] !== color) continue;

        stack.push([nx, ny]);
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }

    if (4 <= stack.length) {
      for (const [x, y] of stack) {
        board[x][y] = "!";
        candidate.push([x, y]);
      }
    }
  }
}

console.log(answer);
