const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const board = [];
let point = [];
let end_point = [];
for (let i = 0; i < n; i++) {
  const arr = input[index++].split("");
  for (let j = 0; j < n; j++) {
    if (arr[j] === "B" && !point.length) {
      if (arr[j + 1] === arr[j]) point = [i, j + 1, "row"];
      else point = [i + 1, j, "col"];
    } else if (arr[j] === "E" && !end_point.length) {
      if (arr[j + 1] === arr[j]) end_point = [i, j + 1, "row"];
      else end_point = [i + 1, j, "col"];
    }

    if (isNaN(arr[j])) {
      arr[j] = 0;
    } else {
      arr[j] = Number(arr[j]);
    }
  }
  board.push(arr);
}

const directions = ["U", "D", "L", "R"];

const d = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

const pos = {
  row: [
    [0, -1],
    [0, 0],
    [0, 1],
  ],
  col: [
    [-1, 0],
    [0, 0],
    [1, 0],
  ],
};

console.log(bfs(...point));

function bfs(x, y, p) {
  const visited = {
    row: Array.from({ length: n }, () => Array(n).fill(-1)),
    col: Array.from({ length: n }, () => Array(n).fill(-1)),
  };

  const queue = [[x, y, p]];
  visited[p][x][y] = 0;

  while (queue.length) {
    const [x, y, p] = queue.shift();

    if (is_end(x, y, p)) return visited[p][x][y];

    for (let direction of directions) {
      const [dx, dy] = d[direction];

      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (visited[p][nx][ny] !== -1) continue;

      let cnt = 0;
      for (let [offset_x, offset_y] of pos[p]) {
        const nx = x + dx + offset_x;
        const ny = y + dy + offset_y;

        if (nx < 0 || ny < 0 || nx >= n || ny >= n) break;
        if (board[nx][ny] === 1) break;

        cnt++;
      }

      if (cnt !== 3) continue;

      visited[p][x + dx][y + dy] = visited[p][x][y] + 1;
      queue.push([x + dx, y + dy, p]);
    }

    if (rotate(x, y, p)) {
      if (p === "row" && visited["col"][x][y] === -1) {
        visited["col"][x][y] = visited["row"][x][y] + 1;
        queue.push([x, y, "col"]);
      } else if (p === "col" && visited["row"][x][y] === -1) {
        visited["row"][x][y] = visited["col"][x][y] + 1;
        queue.push([x, y, "row"]);
      }
    }
  }

  return 0;
}

function is_end(x, y, p) {
  const [ex, ey, ep] = end_point;

  if (x === ex && y === ey && p === ep) return true;
  else false;
}

function rotate(x, y, p) {
  for (let dx of [-1, 0, 1]) {
    for (let dy of [-1, 0, 1]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) return false;

      if (board[nx][ny] === 1) return false;
    }
  }

  return true;
}
