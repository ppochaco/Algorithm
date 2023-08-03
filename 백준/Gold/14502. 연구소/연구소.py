import sys, itertools, copy
input = sys.stdin.readline
from collections import deque

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
blank_index = []
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
answer = 0

def make_walls():
    three_walls = list(itertools.combinations(blank_index,3))

    for wall in three_walls:
        for i in range(3):
            x, y = wall[i]
            graph[x][y] = 1

        spread_virus()

        for i in range(3):
            x, y = wall[i]
            graph[x][y] = 0

def spread_virus():
    global answer
    virus_graph = copy.deepcopy(graph)
    queue = deque([])
    for i in range(n):
        for j in range(m):
            if virus_graph[i][j] == 2:
                queue.append((i,j))
    
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0<=nx<n and 0<=ny<m and virus_graph[nx][ny] == 0:
                virus_graph[nx][ny] = 2
                queue.append((nx,ny))
    
    blank_cnt = 0
    for i in range(n):
        for j in range(m):
            if virus_graph[i][j] == 0:
                blank_cnt += 1
    answer = max(blank_cnt, answer)


for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            blank_index.append((i,j))
make_walls()
print(answer)
