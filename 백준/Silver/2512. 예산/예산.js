const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

const N = Number(input[0])
const request_budgets = input[1].split(' ').map(Number)
request_budgets.sort((a, b) => a - b)
const max_budget = Number(input[2])

const answer = divide_budget(max_budget) <= max_budget ? Math.max(...request_budgets) : get_limit()
console.log(answer)

function get_limit() {
  let limit = 0
  let left = 0
  let right = max_budget
  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    const bugets = divide_budget(mid)
    
    if (bugets <= max_budget) {
      limit = Math.max(limit, mid)
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return limit
}

function divide_budget(limit) {
  let sum = 0
  for (const buget of request_budgets) {
    sum += Math.min(limit, buget)
  }

  return sum
}