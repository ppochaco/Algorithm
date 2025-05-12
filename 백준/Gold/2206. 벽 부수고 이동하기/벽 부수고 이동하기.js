const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
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
  const visited = Array.from({ length: n }, () => Array(m).fill(-1));
  visited[0][0] = 1;
  const queue = [[1, 1, 0, 0]];

  let front = 0;
  while (front < queue.length) {
    const [w, distance, x, y] = queue[front++];

    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      let nw = w;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (map[nx][ny] === 1) nw = w - 1;

      if (nw <= visited[nx][ny]) continue;

      visited[nx][ny] = nw;
      queue.push([nw, distance + 1, nx, ny]);
    }
  }

  return -1;
}
