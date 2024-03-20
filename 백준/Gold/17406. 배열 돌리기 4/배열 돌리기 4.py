import sys
from copy import deepcopy
from itertools import permutations
input = sys.stdin.readline

n, m, k = map(int, input().split())
origin = [list(map(int, input().split())) for _ in range(n)]
dx = [0, 1, 0, -1] # →, ↓, ↑, ←
dy = [1, 0, -1, 0]
rcs = []
for _ in range(k):
    rcs.append(list(map(int, input().split())))

def move_one_step(r, c, s):
    global board, answer

    for offset in range(s, 0, -1):
        x, y = r - offset, c - offset
        prev = board[x][y]

        for i in range(4):
            while True:
                nx, ny = x + dx[i], y + dy[i]

                # 다음이 회전 라인 밖이라면 방향 바꾸기
                if not (r - offset <= nx <= r + offset) or not (c - offset <= ny <= c + offset):
                    break

                board[nx][ny], prev = prev, board[nx][ny]
                x, y = nx, ny
                

answer = sys.maxsize
for cur_list in permutations(rcs):

    board = deepcopy(origin)
    for r, c, s in cur_list:
        move_one_step(r-1, c-1, s)

    for row in board:
        answer = min(answer, sum(row))

print(answer)
            
