const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
let ice = [];
for (let i = 0; i < n; i++) {
  ice.push(input[index++].split(" ").map(Number));
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let year = 0;

while (true) {
  pass_year();
  year++;

  const [cnt, check] = check_cnt();

  if (cnt === 0) {
    console.log(0);
    break;
  }

  if (cnt !== 1) {
    console.log(year);
    break;
  }

  if (!check) {
    console.log(0);
    break;
  }
}

function check_cnt() {
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  let cnt = 0;
  let ice_cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (ice[i][j]) {
        ice_cnt++;
        if (!visited[i][j]) {
          bfs(i, j, visited);
          cnt++;
        }
      }
    }
  }

  if (ice_cnt === 0) return [cnt, false];

  return [cnt, ice_cnt === cnt ? false : true];
}

function pass_year() {
  const result = ice.map((i) => i.slice());

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (ice[x][y]) {
        let cnt = 0;
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

          if (!ice[nx][ny]) cnt++;
        }

        if (cnt <= ice[x][y]) {
          result[x][y] -= cnt;
        } else {
          result[x][y] = 0;
        }
      }
    }
  }

  ice = result.map((i) => i.slice());
}

function bfs(x, y, visited) {
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (!ice[nx][ny] || visited[nx][ny]) continue;

      queue.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}
