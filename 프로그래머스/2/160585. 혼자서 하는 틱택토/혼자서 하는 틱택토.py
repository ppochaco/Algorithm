def solution(board):
    return check_board(board)

def check_board(board):
    X, O = 0, 0
    for i in range(0, 3):
        for j in range(0, 3):
            if board[i][j] == 'X':
                X += 1
            elif board[i][j] == 'O':
                O += 1
    if O < X:
        return 0
    
    finish_board = [[[0, 0], [0, 1], [0, 2]],
                    [[1, 0], [1, 1], [1, 2]],
                    [[2, 0], [2, 1], [2, 2]],
                    [[0, 0], [1, 0], [2, 0]],
                    [[0, 1], [1, 1], [2, 1]],
                    [[0, 2], [1, 2], [2, 2]],
                    [[0, 0], [1, 1], [2, 2]],
                    [[0, 2], [1, 1], [2, 0]],
                   ]
    cnt = { 'X': 0, 'O': 0 }
    
    for [x1, y1], [x2, y2], [x3, y3] in finish_board:
        if board[x1][y1] == '.': continue
        if board[x1][y1] == board[x2][y2] == board[x3][y3]:
            cnt[board[x1][y1]] += 1
    
    if cnt['O'] and X + 1 != O:
        return 0
    
    if cnt['X'] and X != O:
        return 0
    
    if cnt['X'] and cnt['O']:
        return 0
    
    if not cnt['X'] and not cnt['O'] and X + 1 < O:
        return 0
    
    return 1
        
        
        
        
        
        