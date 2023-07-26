import sys
input = sys.stdin.readline

from collections import deque

r, c = map(int, input().split())
graph = [list(input().rstrip()) for _ in range(r)]
queue = deque([(0,0,graph[0][0])])
dx = [0, 1, -1, 0]
dy = [1, 0, 0, -1]
answer = 0

while queue:
    x, y, s = queue.pop()
    answer = max(answer, len(s))

    for i in range(4):
        cur_x = x + dx[i]
        cur_y = y + dy[i]

        if cur_x < 0 or cur_x >= r:
            continue
        if cur_y < 0 or cur_y >= c:
            continue

        if graph[cur_x][cur_y] not in s:
            queue.append((cur_x, cur_y, s + graph[cur_x][cur_y]))
print(answer)
