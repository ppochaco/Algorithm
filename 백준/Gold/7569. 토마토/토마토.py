import sys
from collections import deque
input = sys.stdin.readline

m, n, h = map(int, input().split())
graph = [[list(map(int, input().split())) for _ in range(n)] for _ in range(h)]
visited = [[[False]*m for _ in range(n)] for _ in range(h)]
dx = [-1, 1, 0, 0, 0, 0]
dy = [0, 0, -1, 1, 0, 0]
dz = [0, 0, 0, 0, -1, 1]
days = 0

def bfs(start):
    global days
    
    queue = deque([])
    for i, j, k in start:
        queue.append((0, i, j, k))
        visited[i][j][k] = True

    while queue:
        day, x, y, z = queue.popleft()
        for i in range(6):
            nx, ny, nz = x + dx[i], y + dy[i], z + dz[i]
            if nx < 0 or ny < 0 or nz < 0:
                continue
            if nx >= h or ny >= n or nz >= m:
                continue
            if visited[nx][ny][nz]:
                continue
            if graph[nx][ny][nz] != 0:
                continue
            queue.append((day+1, nx, ny, nz))
            visited[nx][ny][nz] = True
            graph[nx][ny][nz] = 1
        days = day

start_list = []
for i in range(h):
    for j in range(n):
        for k in range(m):
            if graph[i][j][k] == 1:
                start_list.append((i,j,k))

bfs(start_list)

for i in range(h):
    for j in range(n):
        for k in range(m):
            if graph[i][j][k] == 0:
                print(-1)
                exit()
print(days)