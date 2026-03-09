const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

let index = 0
const t = Number(input[index++])
const directions = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]]

for (let i = 0; i < t; i++) {
  const I = Number(input[index++])
  const [x1, y1] = input[index++].split(' ').map(Number)
  const [x2, y2] = input[index++].split(' ').map(Number)

  console.log(bfs(I, x1, y1, x2, y2))
}

function bfs(n, startX, startY, endX, endY) {
  const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
  let idx = 0
  const queue = []

  visited[startX][startY] = true
  queue.push([0, startX, startY])

  while(idx < queue.length) {
    const [cnt, x, y] = queue[idx++]
    if (x === endX && y === endY) return cnt

    for (const [dx, dy] of directions) {
      const [nx, ny] = [dx + x, dy + y]
      
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue
      if (visited[nx][ny]) continue

      visited[nx][ny] = true
      queue.push([cnt + 1, nx, ny])
    }
  }
}