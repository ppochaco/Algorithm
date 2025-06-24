const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = 5;
const girls = [];
for (let i = 0; i < n; i++) {
  girls.push(input.shift().split(""));
}

const girls_index = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    girls_index.push([i, j]);
  }
}

let answer = 0;
get_seven_girls([], 0);
console.log(answer);

function get_seven_girls(arr, index) {
  if (arr.length === 7) {
    if (is_strong(arr) && is_connected(arr)) {
      answer++;
    }
    return;
  }

  for (let i = index; i < girls_index.length; i++) {
    arr.push(girls_index[i]);
    get_seven_girls(arr, i + 1);
    arr.pop();
  }
}

function is_connected(arr) {
  const visited = Array(7).fill(false);
  const queue = [];

  visited[0] = true;
  queue.push(arr[0]);

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 7; i++) {
      if (visited[i]) continue;

      const [nx, ny] = arr[i];
      if (Math.abs(x - nx) + Math.abs(y - ny) === 1) {
        visited[i] = true;
        queue.push([nx, ny]);
      }
    }
  }

  // visited 7개 모두 true이면 true 반환, 아니면 flase 반환
  return visited.every((v) => v);
}

function is_strong(arr) {
  let s_girls = 0;
  for (const [x, y] of arr) {
    if (girls[x][y] === "S") s_girls++;
  }

  return 4 <= s_girls;
}
