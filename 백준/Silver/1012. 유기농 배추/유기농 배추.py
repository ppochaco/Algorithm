import sys
from collections import deque
input = sys.stdin.readline

T = int(input())

def bfs(count, sx, sy):
    queue.append([sx, sy])
    visited[sx][sy] = count

    while len(queue):
        x, y = queue.popleft()
        for dx, dy in d:
            nx, ny = x + dx, y + dy
            if nx < 0 or ny < 0 or nx >= N or ny >= M:
                continue
            if ground[nx][ny] == 0 or visited[nx][ny]:
                continue

            queue.append([nx, ny])
            visited[nx][ny] = count

for _ in range(T):
    N, M, K = map(int, input().split())

    ground = [[0 for _ in range(M)] for _ in range(N)]

    for i in range(K):
        x, y = map(int, input().split())
        ground[x][y] = 1

    d = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    queue = deque([])
    visited = [[0 for _ in range(M)] for _ in range(N)]
    count = 0


    for i in range(N):
        for j in range(M):
            if ground[i][j] and visited[i][j] == 0:
                count += 1
                bfs(count, i, j)

    print(count)