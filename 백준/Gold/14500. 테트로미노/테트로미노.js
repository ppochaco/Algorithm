const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
const paper = [];
for (let i = 0; i < n; i++) {
  paper.push(input[index++].split(" ").map(Number));
}

let answer = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited = Array.from({ length: n }, () => Array(m).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = true;
    put_blocks(i, j, paper[i][j], 1);
    visited[i][j] = false;
  }
}

console.log(answer);

function put_blocks(x, y, nums, cnt) {
  if (cnt === 4) {
    answer = Math.max(answer, nums);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

    if (visited[nx][ny]) continue;

    if (cnt === 2) {
      visited[nx][ny] = true;
      put_blocks(x, y, nums + paper[nx][ny], cnt + 1);
      visited[nx][ny] = false;
    }

    visited[nx][ny] = true;
    put_blocks(nx, ny, nums + paper[nx][ny], cnt + 1);
    visited[nx][ny] = false;
  }
}
