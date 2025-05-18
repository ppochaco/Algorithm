const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const s = [];
for (let i = 0; i < n; i++) {
  s.push(input[index++].split(" ").map(Number));
}

const groups = [];
make_group(0, []);

let answer = Infinity;

for (let i = 0; i < groups.length / 2; i++) {
  const a_skills = count_skill(groups[i]);
  const b_skills = count_skill(groups[groups.length - 1 - i]);
  answer = Math.min(answer, Math.abs(a_skills - b_skills));
}

console.log(answer);

function count_skill(team) {
  const members = new Set(team);
  let skills = 0;
  for (let i = 0; i < team.length; i++) {
    members.delete(team[i]);
    for (let j = 0; j < n; j++) {
      if (members.has(j)) {
        skills += s[team[i]][j];
      }
    }
    members.add(team[i]);
  }

  return skills;
}

function make_group(start, members) {
  if (members.length === n / 2) {
    groups.push(members);
    return;
  }

  for (let i = start; i < n; i++) {
    make_group(i + 1, [...members, i]);
  }
}
