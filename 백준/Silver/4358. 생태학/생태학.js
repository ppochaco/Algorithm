const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const tree = new Map();

for (let i = 0; i < input.length; i++) {
  const cur_tree = input[i];

  if (tree.has(cur_tree)) {
    tree.set(cur_tree, tree.get(cur_tree) + 1);
  } else {
    tree.set(cur_tree, 1);
  }
}

const answer = [];
const total = input.length;

for (let [name, cnt] of tree) {
  const percent = ((cnt / total) * 100).toFixed(4);
  answer.push(`${name} ${percent}`);
}

console.log(answer.sort().join("\n"));
