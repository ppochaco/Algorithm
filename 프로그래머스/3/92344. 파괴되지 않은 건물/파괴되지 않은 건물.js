function solution(board, skill) {
    let answer = 0;
    
    const n = board.length;
    const m = board[0].length;
    const index = Array.from({ length: n + 1}, () => Array.from({ length: m + 1}, () => 0));
    for (let i = 0; i < skill.length; i++) {
        const [type, r1, c1, r2, c2, degree] = skill[i];
        const sign = type === 1 ? -1 : 1;
        index[r1][c1] += sign * degree;
        index[r2 + 1][c2 + 1] += sign * degree;
        index[r1][c2 + 1] -= sign * degree;
        index[r2 + 1][c1] -= sign * degree;
    }
    
    
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < m; j++) {
            index[i][j] += index[i][j - 1];
        }  
    }
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            index[j][i] += index[j - 1][i];
        }  
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] += index[i][j];
            if (board[i][j] > 0) answer++;
        }
    }
    
    
    return answer;
}