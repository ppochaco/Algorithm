import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def mark_outside(start_queue):
    queue = deque(start_queue)

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = dx[i] + x, dy[i] + y
            if graph[nx][ny] == 0:
                queue.append((nx, ny))
                graph[nx][ny] = -1

def get_c_cheese():
    c_cheese = []
    for x in range(n):
        for y in range(m):
            if graph[x][y] == 1:
                for i in range(4):
                    nx, ny = dx[i] + x, dy[i] + y
                    if graph[nx][ny] == -1:
                        c_cheese.append((x, y))
                        break
    
    return c_cheese

def remove_cheese(c_cheese):
    for x, y in c_cheese:
        graph[x][y] = -1


mark_outside([(0,0)])
time = 0
last_cheese = 0

while True:
    c_cheese = get_c_cheese()

    if not c_cheese:
        print(time)
        print(len(last_cheese))
        break

    time += 1
    remove_cheese(c_cheese)
    mark_outside(c_cheese)
    last_cheese = c_cheese