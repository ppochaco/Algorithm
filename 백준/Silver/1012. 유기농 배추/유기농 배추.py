import sys
from collections import deque
input = sys.stdin.readline

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

t = int(input())

def bfs(start_x, start_y, earthworm, board, visited):
    queue = deque([(start_x, start_y)])
    visited[start_x][start_y] = earthworm

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if board[nx][ny] == 0:
                continue
            if visited[nx][ny]:
                continue
            queue.append((nx, ny))
            visited[nx][ny] = earthworm

for _ in range(t):
    m, n, k = map(int, input().split())
    board = [[0]*m for _ in range(n)]
    visited = [[0]*m for _ in range(n)]

    cabbage = []
    for _ in range(k):
        x, y = map(int, input().split())
        board[y][x] = 1
        cabbage.append((y,x))
    
    earthworm = 1
    for i, j in cabbage:
        if visited[i][j]:
            continue
        bfs(i, j, earthworm, board, visited)
        earthworm += 1
        
    print(earthworm-1)