const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const pre_traversal = input.split("\n").map(Number);

function visit_tree(start, end) {
  if (end < start) return;

  let mid = end + 1;
  for (let i = start + 1; i <= end; i++) {
    if (pre_traversal[start] < pre_traversal[i]) {
      mid = i;
      break;
    }
  }

  visit_tree(start + 1, mid - 1);
  visit_tree(mid, end);

  console.log(pre_traversal[start]);
}

visit_tree(0, pre_traversal.length - 1);
