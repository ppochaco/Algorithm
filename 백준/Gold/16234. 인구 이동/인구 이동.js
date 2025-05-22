const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, l, r] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let day = 0;

while (true) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  let blocked = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  if (blocked === n * n) break;

  day++;

  function bfs(x, y) {
    const queue = [[x, y]];
    const country = [[x, y]];
    let people = board[x][y];
    visited[x][y] = true;

    while (queue.length) {
      const [x, y] = queue.pop();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
        if (visited[nx][ny]) continue;
        const diff = Math.abs(board[nx][ny] - board[x][y]);
        if (l <= diff && diff <= r) {
          queue.push([nx, ny]);
          country.push([nx, ny]);
          people += board[nx][ny];
          visited[nx][ny] = true;
        }
      }
    }

    if (country.length === 1) {
      blocked++;
    }

    const people_per_country = Math.floor(people / country.length);
    for (let i = 0; i < country.length; i++) {
      const [x, y] = country[i];
      board[x][y] = people_per_country;
    }
  }
}

console.log(day);
