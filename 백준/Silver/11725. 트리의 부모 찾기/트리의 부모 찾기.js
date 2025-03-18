const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < n - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const parent = Array.from({ length: n + 1 }, () => 0);

function bfs(start) {
  const visited = Array.from({ length: n + 1 }, () => false);
  const queue = [];

  visited[start] = true;
  queue.push(start);

  while (queue.length) {
    const cur_node = queue.shift();

    for (let next_node of graph[cur_node]) {
      if (!visited[next_node]) {
        visited[next_node] = true;
        queue.push(next_node);
        parent[next_node] = cur_node;
      }
    }
  }
}

bfs(1);
console.log(parent.slice(2).join("\n"));
