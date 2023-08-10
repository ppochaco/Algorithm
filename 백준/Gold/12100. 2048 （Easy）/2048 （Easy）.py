import sys, copy
input = sys.stdin.readline
from collections import deque
from itertools import product

n = int(input())
origin = [list(map(int, input().split())) for _ in range(n)]
direction = ['U', 'L', 'D', 'R']
dlist = list(product(direction, repeat=5))
queue = deque()

def merge(x, y, moves):
    dx, dy = moves
    while queue:
        num = queue.popleft()
        if board[x][y] == 0:
            board[x][y] = num
        elif board[x][y] == num:
            board[x][y] *= 2
            x, y = x + dx, y + dy
        else:
            x, y = x + dx, y + dy
            board[x][y] = num

max_num = 0
for d in dlist:
    board = copy.deepcopy(origin)
    
    for i in range(5):
        cur_d = d[i]
        if cur_d == 'U':
            for j in range(n):
                for i in range(n-1, -1, -1):
                    if board[i][j]:
                        queue.append(board[i][j])
                        board[i][j] = 0
                merge(n-1, j, (-1, 0))
        elif cur_d == 'L':
            for i in range(n):
                for j in range(n-1, -1, -1):
                    if board[i][j]:
                        queue.append(board[i][j])
                        board[i][j] = 0
                merge(i, n-1, (0, -1))
        elif cur_d == 'D':
            for j in range(n):
                for i in range(n):
                    if board[i][j]:
                        queue.append(board[i][j])
                        board[i][j] = 0
                merge(0, j, (1, 0))
        else:
            for i in range(n):
                for j in range(n):
                    if board[i][j]:
                        queue.append(board[i][j])
                        board[i][j] = 0
                merge(i, 0, (0, 1))

    max_num = max(max_num, max(map(max, board)))

print(max_num)