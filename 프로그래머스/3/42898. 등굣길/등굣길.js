function solution(m, n, puddles) {
    var answer = 0;
    const INF = Infinity
    
    const board = Array.from({ length: n }, () => new Array(m).fill(0))
    board[0][0] = 1
    for (const [y, x] of puddles) {
        board[x - 1][y - 1] = -1
    }
    
    for (let i = 1; i < n; i++) {
        if (board[i][0] === -1) continue
        board[i][0] = Math.max(0, board[i - 1][0])
    }
    for (let i = 1; i < m; i++) {
        if (board[0][i] === -1) continue
        board[0][i] = Math.max(0, board[0][i - 1])
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (board[i][j] === -1) continue
            if (board[i - 1][j] < 1 && board[i][j - 1] < 1) {
                board[i][j] = 0
            } else {
                board[i][j] = (Math.max(board[i - 1][j], 0) + Math.max(board[i][j - 1], 0)) % 1000000007
            }
        }
    }
    
    return board[n - 1][m - 1]
    
}