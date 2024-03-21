import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
dx = [-1, -1, -1, 0, 0, 1, 1, 1]
dy = [-1, 0, 1, 1, -1, 0, -1, 1]

def bfs():
    queue = deque(shark)
    while queue:
        x, y = queue.popleft()
        
        for i in range(8):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if visited[nx][ny]:
                continue
            visited[nx][ny] = visited[x][y] + 1
            queue.append((nx, ny))

shark = []
visited = [[0]*m for _ in range(n)]
for i in range(n):
    for j in range(m):
        if board[i][j] == 1:
            shark.append((i,j))
            visited[i][j] = 1

bfs()

answer = 0
for i in visited:
    answer = max(max(i), answer)
    
print(answer - 1)