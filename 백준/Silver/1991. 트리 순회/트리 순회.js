const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input.shift());

const graph = new Map();
for (let i = 0; i < n; i++) {
  const [cur, left, right] = input[index++].split(" ");
  graph.set(cur, [left, right]);
}

const answer = [[], [], []];

function preorder_traversal(node) {
  const [left, right] = graph.get(node);

  answer[0].push(node);

  if (left !== ".") preorder_traversal(left);

  if (right !== ".") preorder_traversal(right);
}

function inorder_traversal(node) {
  const [left, right] = graph.get(node);

  if (left !== ".") inorder_traversal(left);

  answer[1].push(node);

  if (right !== ".") inorder_traversal(right);
}

function postorder_traversal(node) {
  const [left, right] = graph.get(node);

  if (left !== ".") postorder_traversal(left);

  if (right !== ".") postorder_traversal(right);

  answer[2].push(node);
}

preorder_traversal("A");
inorder_traversal("A");
postorder_traversal("A");

for (let i = 0; i < 3; i++) {
  console.log(answer[i].join(""));
}
