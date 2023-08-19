import sys
input = sys.stdin.readline
from heapq import heappush, heappop

n = int(input())
space = [list(map(int, input().split())) for _ in range(n)]
size = 2
eat = 0
start = []
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]

def bfs(x, y):
    global size, eat
    visited = [[0]*n for _ in range(n)]
    heap = []
    space[x][y] = 0
    heappush(heap, (0, x, y))
    while heap:
        depth, x, y = heappop(heap)
        if space[x][y] != 0 and space[x][y] < size:
            eat += 1
            space[x][y] = 0
            start.append((x,y))
            if eat == size:
                eat = 0
                size += 1
            return visited[x][y]
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 > nx or 0 > ny or n <= nx or n <= ny:
                continue
            if visited[nx][ny] or space[nx][ny] > size:
                continue
            heappush(heap, (depth+1, nx, ny))
            visited[nx][ny] = depth + 1
    return 0

for i in range(n):
    for j in range(n):
        if space[i][j] == 9:
            start.append((i,j))

time = 0
for i,j in start:
    time += bfs(i,j)
print(time)