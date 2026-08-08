function solution(n, s, a, b, fares) {
    const graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => Infinity))
    for (let i = 1; i <= n; i++) {
        graph[i][i] = 0
    }
    
    for (const [a, b, c] of fares) {
        graph[a][b] = graph[b][a] = c
    }
    
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
            }
        }
    }
    
    let answer = Infinity
    for (let i = 1; i <= n; i++) {
        answer = Math.min(answer, graph[i][s] + graph[i][a] + graph[i][b])
    }
    
    return answer
}