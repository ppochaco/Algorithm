const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let index = 0;
let case_num = 1;

while (true) {
  const [n, m] = input[index++].split(" ").map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);
  let answer = 0;

  if (n + m === 0) {
    break;
  }

  for (let i = 0; i < m; i++) {
    const [a, b] = input[index++].split(" ").map(Number);

    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array.from({ length: n + 1 }, () => false);

  for (let j = 1; j <= n; j++) {
    if (!visited[j]) {
      const is_tree = visit_tree(graph, j, visited);

      if (is_tree) answer++;
    }
  }

  if (answer === 1) {
    console.log(`Case ${case_num}: There is one tree.`);
  } else if (answer === 0) {
    console.log(`Case ${case_num}: No trees.`);
  } else {
    console.log(`Case ${case_num}: A forest of ${answer} trees.`);
  }

  case_num++;
}

function visit_tree(graph, start_node, visited) {
  const queue = [];

  queue.push(start_node);

  let is_tree = true;

  while (queue.length) {
    const node = queue.shift();

    if (visited[node]) {
      is_tree = false;
    }

    visited[node] = true;

    for (let i = 0; i < graph[node].length; i++) {
      const next_node = graph[node][i];

      if (!visited[next_node]) {
        queue.push(next_node);
      }
    }
  }

  return is_tree;
}
