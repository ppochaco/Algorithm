const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
let t = Number(input[index++]);

const directions = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

while (t--) {
  const n = Number(input[index++]);
  const start = input[index++].split(" ").map(Number);
  const end = input[index++].split(" ").map(Number);
  console.log(bfs(n, { x: start[0], y: start[1] }, { x: end[0], y: end[1] }));
}

function bfs(n, start, end) {
  const visited = Array.from({ length: n }, () => Array(n).fill(0));

  const queue = [[start.x, start.y]];
  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === end.x && y === end.y) {
      return visited[x][y];
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return -1;
}
