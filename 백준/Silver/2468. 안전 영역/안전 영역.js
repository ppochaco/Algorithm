const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

let height = 1;
let answer = 1;
while (height <= 100) {
  const visited = drop_rain(height);
  const area = get_safe_area(visited);
  answer = Math.max(answer, area);

  if (area === 0) break;
  height++;
}
console.log(answer);

const visited = drop_rain(6);
get_safe_area(visited);

function bfs(x, y, visited) {
  const queue = [[x, y]];
  visited[x][y] = true;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      if (visited[nx][ny]) continue;

      queue.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}

function get_safe_area(visited) {
  let safe_area = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        bfs(i, j, visited);
        safe_area++;
      }
    }
  }

  return safe_area;
}

function drop_rain(height) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] <= height) {
        visited[i][j] = true;
      }
    }
  }

  return visited;
}
