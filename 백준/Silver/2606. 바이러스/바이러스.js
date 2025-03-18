const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const m = Number(input.shift());

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function get_virus_cnt(start) {
  const visited = Array.from({ length: n + 1 }, () => false);
  const queue = [];
  let virus = 0;

  queue.push(start);
  visited[start] = true;

  while (queue.length) {
    const cur = queue.shift();
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (visited[next]) continue;

      queue.push(next);
      visited[next] = true;
      virus++;
    }
  }

  return virus;
}

console.log(get_virus_cnt(1));
