const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const n = Number(input);

// const not_15 = new Set([0, 2, 3, 4, 6, 7, 8, 9]);
// const count = [];
// for (let i = 10000000; i < 100000000; i++) {
//   if (i % 15 === 0) {
//     let check = false;
//     for (let num of new Set(i.toString().split(""))) {
//       if (not_15.has(Number(num))) {
//         check = true;
//         break;
//       }
//     }

//     if (!check) count.push(i);
//   }
// }
// console.log(count.length);

const MOD = 1_000_000_007;

const dp = [0, 0, 1];
for (let i = 3; i <= n; i++) {
  dp[i] = (((dp[i - 2] * 2) % MOD) + dp[i - 1]) % MOD;
}

console.log(dp[n]);
