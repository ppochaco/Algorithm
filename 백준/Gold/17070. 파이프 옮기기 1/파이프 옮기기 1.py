import sys
input = sys.stdin.readline

n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]

pipe = [[] for _ in range(n)]
for i in range(n):
    for j in range(n):
        pipe[i].append([0, 0, 0])
# pipe 초기값 세팅
for i in range(1, n):
    if board[0][i] == 1:
        break
    pipe[0][i] = [1, 0, 0]
# pipe 업데이트
for i in range(1,n):
    for j in range(2, n):
        if board[i][j] == 1:
            continue

        row, col, dia = pipe[i][j]
        # (i, j-1)로 row 업데이트
        pre_row, pre_col, pre_dia = pipe[i][j-1]
        row = pre_row + pre_dia

        # (i-1, j)로 col 업데이트
        pre_row, pre_col, pre_dia = pipe[i-1][j]
        col = pre_col + pre_dia

        # (i-1, j-1)로 dia 업데이트
        if board[i-1][j] == 0 and board[i][j-1] == 0:
            pre_row, pre_col, pre_dia = pipe[i-1][j-1]
            dia = pre_row + pre_col + pre_dia
        
        pipe[i][j] = [row, col, dia]

print(sum(pipe[n-1][n-1]))