const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  push(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  shift() {
    if (this.rear === 0) return undefined;

    let removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }
}

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}
const [s, x, y] = input[index++].split(" ").map(Number);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const virus = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    virus.push([board[i][j], i, j]);
  }
}
virus.sort((a, b) => a[0] - b[0]);

console.log(bfs());

function bfs() {
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  const queue = new Queue();

  for (let [num, x, y] of virus) {
    queue.push([num, x, y, 0]);
    visited[x][y] = num;
  }

  while (queue.size()) {
    const [num, x, y, t] = queue.shift();

    if (t === s) break;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      if (visited[nx][ny]) continue;

      queue.push([num, nx, ny, t + 1]);
      visited[nx][ny] = num;
    }
  }

  return visited[x - 1][y - 1];
}
