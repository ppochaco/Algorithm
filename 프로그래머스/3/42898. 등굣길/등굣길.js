function solution(m, n, puddles) {
    const board = Array.from({ length: n }, () => new Array(m).fill(0))
    board[0][0] = 1
    for (const [y, x] of puddles) {
        board[x - 1][y - 1] = -1
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === -1) continue
            if (i === 0 && j === 0) continue
            
            const up = 0 < i && board[i - 1][j] !== -1 ? board[i - 1][j] : 0
            const left = 0 < j && board[i][j - 1] !== -1 ? board[i][j - 1] : 0
            board[i][j] = (up + left) % 1000000007
        }
    }
    
    return board[n - 1][m - 1] % 1000000007
    
}