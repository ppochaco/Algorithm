import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

n, m, k = map(int, input().split())
point = []
graph = [[0]*m for _ in range(n)]
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def dfs(x, y):
    global count
    graph[x][y] = 1
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0<=nx<n and 0<=ny<m and not graph[nx][ny]:
            graph[nx][ny] = 1
            count += 1
            dfs(nx,ny)

for i in range(k):
    x1, y1, x2, y2 = map(int, input().split())
    point.append((n-y2, x1, n-y1, x2))

for i in point:
    x1, y1, x2, y2 = i
    for i in range(x1, x2):
        for j in range(y1, y2):
            graph[i][j] = -1

area = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            count = 1
            dfs(i,j)
            area.append(count)

print(len(area))
area.sort()
print(*area)