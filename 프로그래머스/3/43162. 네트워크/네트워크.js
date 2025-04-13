function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({ length: n }, () => false);
    
    function bfs(start) {
        visited[start] = true
        answer ++
        
        const queue = [start];
        while(queue.length) {
            const computer = queue.shift();
            for(let i = 0; i < n; i++) {
                if (computers[computer][i] === 0) continue;
                
                if (!visited[i]) {
                    queue.push(i)
                    visited[i] = true
                }
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i)
        }
    }
    
    return answer;
}