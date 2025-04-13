function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({ length: n }, () => false);
    
   function dfs(cur) {
       if (visited[cur]) {
           return 0
       }
       
       visited[cur] = true
       for (let i = 0; i < n; i++) {
           if (computers[cur][i]) {
               dfs(i)
           }
       }
       
       return 1
    }

    for (let i = 0; i < n; i ++) {
        answer += dfs(i)
    }
    
    return answer;
}