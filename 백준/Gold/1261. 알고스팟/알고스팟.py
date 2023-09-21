import sys
input = sys.stdin.readline
from heapq import heappush, heappop

m,n = map(int, input().split())
graph = [list(map(int, input().rstrip())) for _ in range(n)]
INF = sys.maxsize
visited = [[INF]*m for _ in range(n)]
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def dijkstra(x, y):
    queue = []
    visited[0][0] = 0
    heappush(queue, (0, x, y))
    while queue:
        wall, x, y = heappop(queue)
        if x == n-1 and y == m-1:
            return wall
        if wall != visited[x][y]:
            continue
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if graph[nx][ny] == 1:
                next_wall = wall + 1
            else:
                next_wall = wall
            if next_wall < visited[nx][ny]:
                visited[nx][ny] = next_wall
                heappush(queue, (next_wall, nx, ny))

print(dijkstra(0,0))