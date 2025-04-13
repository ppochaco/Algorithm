function solution(begin, target, words) {    
    function check_word(a, b) {
        let cnt = 0;
        
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) cnt++
        }
        
        if (cnt === 1) return true
        
        return false
    }

    function bfs() {
        const visited = { [begin]: 0 };
        const queue = [begin];
        
        while(queue.length) {
            const word = queue.shift();
            
            if (word === target) {
                return visited[target]
            }
            
            for(let next_word of words) {
                if (check_word(next_word, word) && !visited[next_word]) {
                    visited[next_word] = visited[word] + 1;
                    queue.push(next_word);
                }
            }
        }
        
        return 0
        
    }
    
    return bfs();
}