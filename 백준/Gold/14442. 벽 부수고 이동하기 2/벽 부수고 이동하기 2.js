class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  push(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }

    this.rear = node;
    this.length++;
  }

  shift() {
    if (!this.head) return undefined;

    const removed = this.head.data;
    this.head = this.head.next;
    this.length--;

    return removed;
  }
}
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
  const queue = new Queue();
  queue.push([0, 0, 0]);
  visited[0][0][0] = 1;

  while (queue.size()) {
    const [broke, x, y] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return visited[x][y][broke];
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (map[nx][ny] === 0 && visited[nx][ny][broke] === 0) {
        visited[nx][ny][broke] = visited[x][y][broke] + 1;
        queue.push([broke, nx, ny]);
      } else if (
        map[nx][ny] === 1 &&
        broke < k &&
        visited[nx][ny][broke + 1] === 0
      ) {
        visited[nx][ny][broke + 1] = visited[x][y][broke] + 1;
        queue.push([broke + 1, nx, ny]);
      }
    }
  }

  return -1;
}
