def solution(board):
    return check_board(board)

def check_board(board):
    X = sum(row.count('X') for row in board)
    O = sum(row.count('O') for row in board)
    
    if O < X:
        return 0
    
    if X + 1 < O:
        return 0
    
    if check_win('O', board) and X + 1 != O:
        return 0
    
    if check_win('X', board) and X != O:
        return 0
    
    
    return 1

def check_win(player, board):
    for i in range(3):
        if all(cell == player for cell in board[i]):
            return True
        
    
    for j in range(3):
        if all(board[i][j] == player for i in range(3)):
            return True
        
    if all(board[i][i] == player for i in range(3)):
        return True
    if all(board[i][2-i] == player for i in range(3)):
        return True
    
    return False
        
        
        
        
        