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

  if (n + m === 0) {
    break;
  }

  const parent = Array.from({ length: n + 1 }, (_, index) => index);
  const cycle = new Set();

  function find(node) {
    if (parent[node] === node) return node;

    parent[node] = find(parent[node]);
    return parent[node];
  }

  function union(a, b) {
    a = find(a);
    b = find(b);

    if (a < b) parent[b] = a;
    else parent[a] = b;
  }

  for (let i = 0; i < m; i++) {
    const [a, b] = input[index++].split(" ").map(Number);

    if (find(a) === find(b)) {
      cycle.add(parent[a]);
    }

    if (cycle.has(parent[a]) || cycle.has(parent[b])) {
      cycle.add(parent[a]);
      cycle.add(parent[b]);
    }

    union(a, b);
  }

  for (let i = 1; i <= n; i++) {
    find(i);
  }

  const parent_set = new Set(parent.slice(1));
  const intersection = new Set(
    [...parent_set].filter((node) => cycle.has(node))
  );
  const answer = parent_set.size - intersection.size;

  if (answer === 1) {
    console.log(`Case ${case_num}: There is one tree.`);
  } else if (answer === 0) {
    console.log(`Case ${case_num}: No trees.`);
  } else {
    console.log(`Case ${case_num}: A forest of ${answer} trees.`);
  }

  case_num++;
}
