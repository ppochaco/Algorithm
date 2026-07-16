function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => [])
    for (const [a, b] of edge) {
        graph[a].push(b)
        graph[b].push(a)
    }
    
    const visited = new Array(n + 1).fill(0)
    const queue = [1]
    let index = 0
    while (index < queue.length) {
        const node = queue[index++]
        for (const next_node of graph[node]) {
            if (visited[next_node]) continue
            queue.push(next_node)
            visited[next_node] = visited[node] + 1
        }
    }
    visited[1] = 0
    
    const max_distance = Math.max(...visited)
    const answer = visited.filter((distance) => distance === max_distance).length
    
    return answer;
}