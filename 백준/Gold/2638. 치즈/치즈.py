import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def init_outside():
    start = (-1, -1)
    
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 0:
                start = (i, j)
                break
        if not start == (-1, -1):
            break
    
    queue = deque([start])
    graph[start[0]][start[1]] = -1

    while queue:
        cur_node = queue.popleft()
        for i in range(4):
            nx = dx[i] + cur_node[0]
            ny = dy[i] + cur_node[1]
            if graph[nx][ny] == 0:
                queue.append((nx, ny))
                graph[nx][ny] = -1

def get_c_cheese():
    cheese = []

    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                outside_cnt = 0
                for k in range(4):
                    nx = dx[k] + i
                    ny = dy[k] + j
                    if graph[nx][ny] == -1:
                        outside_cnt += 1
                if outside_cnt >= 2:
                    cheese.append((i, j))
    
    return cheese

def remove_c_cheese(cheese):
    for i, j in cheese:
        graph[i][j] = -1

def mark_outsize(cheese):
    queue = deque(cheese)
    while queue:
        cur_x, cur_y = queue.popleft()
        for i in range(4):
            nx = dx[i] + cur_x
            ny = dy[i] + cur_y
            if graph[nx][ny] == 0:
                queue.append((nx, ny))
                graph[nx][ny] = -1
    
time = 0

init_outside()
while True:
    c_cheese = get_c_cheese()

    if not c_cheese:
        break

    time += 1
    remove_c_cheese(c_cheese)
    mark_outsize(c_cheese)

print(time)