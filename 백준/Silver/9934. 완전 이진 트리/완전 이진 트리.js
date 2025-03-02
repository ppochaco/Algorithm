const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const nums = input.shift().split(" ").map(Number);

const tree = Array.from({ length: n }, () => []);

function visit_tree(start, end, depth) {
  let mid = Math.floor((start + end) / 2);

  if (depth === n) return;

  tree[depth].push(nums[mid]);
  visit_tree(start, mid - 1, depth + 1);
  visit_tree(mid + 1, end, depth + 1);
}

visit_tree(0, nums.length - 1, 0);

const answer = [];
for (let i = 0; i < tree.length; i++) {
  answer.push(tree[i].join(" "));
}

console.log(answer.join("\n"));
