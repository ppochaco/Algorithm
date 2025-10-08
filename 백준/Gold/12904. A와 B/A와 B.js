const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString();

const [s, t] = input.split('\n').map((i) => i.split(''));
const candidates = new Set();

dfs(t);

const answer = candidates.has(s.join('')) ? 1 : 0;
console.log(answer);

function dfs(cur) {
  if (cur.length === s.length) {
    candidates.add(cur.join(''));
    return;
  }

  const last_word = cur.pop();
  if (last_word === 'A')dfs(cur);
  else dfs(cur.reverse());
}