import sys
input = sys.stdin.readline

sys.setrecursionlimit(10**9)

n, m = map(int, input().split())
graph = [list(input().rstrip()) for _ in range(n)]
visited = [[0]*m for _ in range(n)]
direction = ['D', 'U', 'L', 'R']
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
safe = 0

def pipe(x,y,k):
    global safe
    
    if visited[x][y] != 0:
        if visited[x][y] == k:
            safe += 1
        return
    
    visited[x][y] = k 
    index = direction.index(graph[x][y])
    nx, ny = x + dx[index], y + dy[index]
    pipe(nx, ny, k)

k = 1
for i in range(n):
    for j in range(m):
            pipe(i,j,k)
            k += 1
print(safe)