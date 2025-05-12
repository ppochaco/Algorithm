const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m, k] = input[index++].split(" ").map(Number);
const map = [];
for (let i = 0; i < n; i++) {
  map.push(input[index++].split("").map(Number));
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

console.log(bfs());

function bfs() {
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(k + 1).fill(0))
  );
  visited[0][0][0] = 1;

  let queue = [[0, 0, 0]];
  while (queue.length) {
    const next_queue = [];

    for (const [broke, x, y] of queue) {
      if (x === n - 1 && y === m - 1) {
        return visited[x][y][broke];
      }

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

        if (map[nx][ny] === 0 && visited[nx][ny][broke] === 0) {
          visited[nx][ny][broke] = visited[x][y][broke] + 1;
          next_queue.push([broke, nx, ny]);
        } else if (
          map[nx][ny] === 1 &&
          broke < k &&
          visited[nx][ny][broke + 1] === 0
        ) {
          visited[nx][ny][broke + 1] = visited[x][y][broke] + 1;
          next_queue.push([broke + 1, nx, ny]);
        }
      }
    }

    queue = next_queue;
  }

  return -1;
}
