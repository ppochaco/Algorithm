function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    function bfs() {
        const queue = [[0,0]];
        
        while(queue.length) {
            const [cur_x, cur_y] = queue.shift();
            
            for (let i = 0; i < 4; i++) {
                const nx = dx[i] + cur_x;
                const ny = dy[i] + cur_y;
                
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                
                if (maps[nx][ny] === 1) {
                    queue.push([nx, ny]);
                    maps[nx][ny] = maps[cur_x][cur_y] + 1;
                }
            }
        }
    }
    
    bfs();
    
    if (maps[n-1][m-1] === 1) {
        return -1;
    }
    
    return maps[n-1][m-1];
}