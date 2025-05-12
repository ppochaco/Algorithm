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
  const visited = Array.from({ length: n }, () => Array(m).fill(-1));
  visited[0][0] = k;

  let queue = [[k, 1, 0, 0]];
  while (queue.length) {
    const next_queue = [];

    for (const [wall, distance, x, y] of queue) {
      if (x === n - 1 && y === m - 1) {
        return distance;
      }

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        let nwall = wall;

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

        if (map[nx][ny] === 1) nwall = wall - 1;

        if (nwall <= visited[nx][ny]) continue;

        visited[nx][ny] = nwall;
        next_queue.push([nwall, distance + 1, nx, ny]);
      }
    }

    queue = next_queue;
  }

  return -1;
}
