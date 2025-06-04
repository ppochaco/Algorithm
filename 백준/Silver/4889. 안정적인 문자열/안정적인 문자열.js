const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
while (true) {
  const curl = input[index++];

  if (curl.includes("-")) break;

  const num = make_safe_curl(curl);
  console.log(`${index}. ${num}`);
}

function make_safe_curl(curl) {
  let c = 0;
  let answer = 0;
  for (let i = 0; i < curl.length; i++) {
    if (curl[i] === "{") {
      c++;
    } else if (curl[i] === "}") {
      c--;
    }

    if (c < 0) {
      c = -c;
      answer++;
    }
  }

  answer += c / 2;

  return answer;
}
