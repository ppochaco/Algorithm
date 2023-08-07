import sys
input = sys.stdin.readline
from collections import deque

n, m = map(int, input().split())
board = [list(input().rstrip()) for _ in range(n)]
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def move_to_end(i, x, y):
    while True:
        nx, ny = x + dx[i], y + dy[i]
        # 다음 위치가 벽이면 현재 위치 리턴
        if board[nx][ny] == '#':
            return x, y
        # 다음 위치가 구멍이면 구멍 위치 리턴
        if board[nx][ny] == 'O':
            return nx, ny
        x, y = nx, ny

def bfs(red, blue):
    queue = deque([(red, blue)])
    visited = [[[[-1]*m for _ in range(n)] for _ in range(m)] for _ in range(n)]
    visited[red[0]][red[1]][blue[0]][blue[1]] = 0
    while queue:
        (rx, ry), (bx, by) = queue.popleft()
        if visited[rx][ry][bx][by] > 10:
            return -1
        if board[rx][ry] == 'O':
            return visited[rx][ry][bx][by]
        for i in range(4):
            nrx, nry = move_to_end(i, rx, ry)
            nbx, nby = move_to_end(i, bx, by)
            
            # 파란 공이 구멍에 빠지면 불가능
            if board[nbx][nby] == 'O':
                continue
            # 빨간 공, 파란 공 위치 같은 경우 처리
            if nrx == nbx and nry == nby:
                r_size = rx*dx[i] + ry*dy[i]
                b_size = bx*dx[i] + by*dy[i]
                # 빨간 공은 그대로, 파란 공은 한 칸 덜 가기
                if r_size > b_size:
                    nbx, nby = nbx - dx[i], nby - dy[i]
                else:
                    nrx, nry = nrx - dx[i], nry - dy[i]
            # 이전에 방문했던 곳이면 불가능
            if visited[nrx][nry][nbx][nby] != -1:
                continue
            visited[nrx][nry][nbx][nby] = visited[rx][ry][bx][by] + 1
            queue.append(((nrx, nry), (nbx, nby)))
    return -1

red = []
blue = []
for i in range(n):
    for j in range(m):
        if board[i][j] == 'R':
            red = (i, j) 
        elif board[i][j] == 'B':
            blue = (i, j)
print(bfs(red, blue))