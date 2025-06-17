const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m, init_fuel] = input[index++].split(" ").map(Number);
let fuel = init_fuel;

const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

let taxi = input[index++].split(" ").map((num) => Number(num) - 1);

const passenger = [];
for (let i = 0; i < m; i++) {
  passenger.push(input[index++].split(" ").map((num) => Number(num) - 1));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const MAX_DISTANCE = 20 * 20 + 1;

console.log(move_taxi());

function move_taxi() {
  for (let t = 0; t < m; t++) {
    const [start_distance, passenger_index] = get_passenger();

    if (fuel < start_distance || start_distance === MAX_DISTANCE) {
      return -1;
    }

    const [start_x, start_y, end_x, end_y] = passenger[passenger_index];

    fuel -= start_distance;
    taxi = [start_x, start_y];

    const distance = get_distance(taxi[0], taxi[1]);
    const end_distance = distance[end_x][end_y];

    if (fuel < end_distance || end_distance === MAX_DISTANCE) {
      return -1;
    }

    fuel += end_distance;
    passenger[passenger_index] = [];
    taxi = [end_x, end_y];
  }

  return fuel;
}

function get_passenger() {
  const candidate = [];
  const distance = get_distance(taxi[0], taxi[1]);

  for (let i = 0; i < m; i++) {
    if (!passenger[i].length) continue;

    const [x, y, _, __] = passenger[i];
    candidate.push([distance[x][y], x, y, i]);
  }

  candidate.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      }
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const [start_distance, _, __, passenger_index] = candidate[0];
  return [start_distance, passenger_index];
}

function get_distance(x, y) {
  const queue = [[x, y]];
  const visited = Array.from({ length: n }, () => Array(n).fill(MAX_DISTANCE));
  visited[x][y] = 0;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (board[nx][ny] === 1) continue;
      if (visited[nx][ny] !== MAX_DISTANCE) continue;

      queue.push([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }

  return visited;
}
