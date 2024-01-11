import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
         
def bfs(start_x, start_y):
    queue = deque([(start_x, start_y, 0)])
    visited = [[-1]*m for _ in range(n)]
    
    while queue:
        x, y, depth = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if board[nx][ny] == 0:
                continue
            if visited[nx][ny] != -1:
                continue
            
            visited[nx][ny] = depth + 1
            queue.append((nx, ny, depth + 1))

    visited[start_x][start_y] = 0
    for i in range(n):
        for j in range(m):
            if board[i][j] == 0:
                visited[i][j] = 0
 
    for i in visited:
        print(*i)

for i in range(n):
    for j in range(m):
        if board[i][j] == 2:
            bfs(i,j)
            break