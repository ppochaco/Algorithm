const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [a, b] = input[index++].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array.from({ length: n + 1 }, () => -1);

function bfs(start) {
  const queue = [];

  queue.push(start);
  visited[start] = 0;

  while (queue.length) {
    const cur_node = queue.shift();
    for (let next_node of graph[cur_node]) {
      if (visited[next_node] === -1) {
        visited[next_node] = visited[cur_node] + 1;
        queue.push(next_node);
      }
    }
  }
}

bfs(1);

const distance = Math.max(...visited);
const min_num = visited.findIndex((node) => node === distance);
const cnt = visited.filter((node) => node === distance).length;

console.log(min_num, distance, cnt);
