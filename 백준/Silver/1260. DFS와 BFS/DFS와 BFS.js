const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().trim().split('\n')

const [n, m, v] = input.shift().split(' ').map(Number)
const graph = Array.from({ length: n + 1 }, () => [])
for (const line of input) {
  const [a, b] = line.split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}
for (const list of graph) {
  list.sort((a, b) => a - b)
}

const dfsAnswer = []
const bfsAnswer = []
dfs(v, Array.from({ length: n + 1 }, () => false), dfsAnswer)
bfs(v, Array.from({ length: n + 1 }, () => false), bfsAnswer)

console.log(dfsAnswer.join(' '))
console.log(bfsAnswer.join(' '))

function dfs(start, visited, answer) {
  const stack = [];
  
  stack.push(start);

  while (stack.length) {
    const node = stack.pop()
    if (visited[node]) continue

    visited[node] = true
    answer.push(node)

    // 인접 노드를 역순으로 넣으면 재귀 DFS와 같은 순서
    for (let i = graph[node].length - 1; i >= 0; i--) {
      const nextNode = graph[node][i];
      if (visited[nextNode]) continue

      stack.push(nextNode)
    }
  }
}

function bfs(start, visited, answer) {
  const queue = []

  visited[start] = true
  queue.push(start)
  answer.push(start)

  while(queue.length) {
    const node = queue.shift()
    
    for (const nextNode of graph[node]) {
      if (visited[nextNode]) continue
      
      visited[nextNode] = true
      queue.push(nextNode)
      answer.push(nextNode)
    }
  }
}