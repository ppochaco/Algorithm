const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [r, c] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < r; i++) {
  board.push(input[index++].split(""));
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let answer = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (board[i][j] === "L") {
      answer = Math.max(answer, bfs(i, j));
    }
  }
}

console.log(answer);

function bfs(x, y) {
  const visited = Array.from({ length: r }, () => Array(c).fill(-1));
  const queue = [[x, y]];
  visited[x][y] = 0;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;

      if (visited[nx][ny] !== -1) continue;

      if (board[nx][ny] === "W") continue;

      queue.push([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }

  let max_num = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      max_num = Math.max(max_num, visited[i][j]);
    }
  }

  return max_num;
}
