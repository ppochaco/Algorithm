const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);

const space = [];
for (let i = 0; i < n; i++) {
  space.push(input[index++].split(" ").map(Number));
}

let time = 0;
let size = 2;
let ate = 0;
let position;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (space[i][j] === 9) {
      position = { x: i, y: j };
      break;
    }
  }
}

while (true) {
  const fish = find_fish(size, position);

  if (fish === -1) break;

  const { distance, x, y } = fish;

  time += distance;
  ate += 1;
  if (ate === size) {
    size++;
    ate = 0;
  }

  space[x][y] = 9;
  space[position.x][position.y] = 0;
  position = { x, y };
}

console.log(time);

function find_fish(size, start) {
  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];

  const queue = [[start.x, start.y]];
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  const fish_distance = [];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (space[x][y] && space[x][y] < size) {
      fish_distance.push({ distance: visited[x][y], x, y });
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (visited[nx][ny]) continue;
      if (size < space[nx][ny]) continue;

      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  if (fish_distance.length === 0) return -1;

  fish_distance.sort((a, b) => {
    if (a.distance === b.distance) {
      if (a.x === b.x) return a.y - b.y;
      return a.x - b.x;
    }
    return a.distance - b.distance;
  });

  return fish_distance[0];
}
