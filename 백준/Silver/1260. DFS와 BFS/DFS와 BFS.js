const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [n, m, v] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i] = graph[i].sort((a, b) => a - b);
}

const dfs_visited = Array.from({ length: n + 1 }, () => false);
const dfs_answer = [];
function dfs(cur_node) {
  dfs_visited[cur_node] = true;
  dfs_answer.push(cur_node);

  for (let next_node of graph[cur_node]) {
    if (!dfs_visited[next_node]) dfs(next_node);
  }
}

const bfs_visited = Array.from({ length: n + 1 }, () => false);
const bfs_answer = [];
function bfs(start) {
  const queue = [];

  queue.push(start);
  bfs_visited[start] = true;
  bfs_answer.push(start);

  while (queue.length) {
    const cur_node = queue.shift();

    for (let next_node of graph[cur_node]) {
      if (!bfs_visited[next_node]) {
        queue.push(next_node);
        bfs_visited[next_node] = true;
        bfs_answer.push(next_node);
      }
    }
  }
}

dfs(v);
bfs(v);
console.log(dfs_answer.join(" "));
console.log(bfs_answer.join(" "));
