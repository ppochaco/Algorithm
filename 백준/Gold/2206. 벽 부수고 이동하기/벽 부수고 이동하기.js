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
  const queue = [[false, 1, 0, 0]];

  let front = 0;
  while (front < queue.length) {
    const [isBreak, distance, x, y] = queue[front++];

    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (map[nx][ny] === 0) {
        queue.push([isBreak, distance + 1, nx, ny]);
        if (isBreak) {
          map[nx][ny] = 2;
        } else {
          map[nx][ny] = 3;
        }
      } else if (map[nx][ny] === 1 && isBreak === false) {
        queue.push([true, distance + 1, nx, ny]);
      } else if (map[nx][ny] === 2 && isBreak === false) {
        queue.push([isBreak, distance + 1, nx, ny]);
        map[nx][ny] = 3;
      }
    }
  }

  return -1;
}
