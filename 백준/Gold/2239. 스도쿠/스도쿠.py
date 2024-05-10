import sys
input = sys.stdin.readline

zero = []
board = []
for i in range(9):
    board.append(list(map(int,input().rstrip())))
    for j in range(9):
        if board[i][j] == 0:
            zero.append((i,j))

def check_row(r, num):
    if num in board[r]:
        return False
    return True

def check_col(c, num):
    for r in range(9):
        if board[r][c] == num:
            return False
    return True

def check_square(r, c, num):
    row = r//3 * 3
    col = c//3 * 3
    for r in range(row, row+3):
        for c in range(col, col+3):
            if board[r][c] == num:
                return False
    return True

def sudoku(depth):
    if depth == len(zero):
        for i in range(9):
            for j in range(9):
                print(board[i][j], end='')
            print()
        exit()
    
    r, c = zero[depth]
    for i in range(1, 10):
        if check_row(r, i) and check_col(c, i) and check_square(r, c, i):
            board[r][c] = i
            sudoku(depth + 1)
            board[r][c] = 0

sudoku(0)