const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

const [m, n, k] = input[0].split(' ').map(Number)
const board = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))

for (let i = 1; i < k + 1; i++) {
  const [sy, sx, ey, ex] = input[i].split(' ').map(Number)  
  for (let x = m - ex; x < m - sx; x++) {
    for (let y = sy; y < ey; y++) {
      board[x][y] = 1
    }
  }
}

const visited = Array.from({ length: m }, () => Array.from({ length: m }, () => false))
const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
const answer = []
let cnt = 0

for (let x = 0; x < m; x++) {
  for (let y = 0; y < n; y++) {
    if (board[x][y] || visited[x][y]) continue
    
    visited[x][y] = true
    cnt = 1

    dfs(x, y)
    
    answer.push(cnt)
  }
}

answer.sort((a, b) => a - b)

console.log(answer.length)
console.log(answer.join(' '))

function dfs(x, y) {
  for (const [dx, dy] of directions) {
    const nx = dx + x
    const ny = dy + y

    if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue
    if (board[nx][ny] || visited[nx][ny]) continue

    visited[nx][ny] = true
    cnt++
    dfs(nx, ny)
  }
}
