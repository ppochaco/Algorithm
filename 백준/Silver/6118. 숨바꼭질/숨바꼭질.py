import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())
board = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    board[a].append(b)
    board[b].append(a)

def bfs(start):
    queue = deque([start])
    visited[start] = 1

    while queue:
        node = queue.popleft()
        for next_node in board[node]:
            if not visited[next_node]:
                visited[next_node] = visited[node] + 1
                queue.append(next_node)

visited = [0]* (n+1)
bfs(1)
distance = max(visited)
idx = visited.index(distance)
cnt = visited.count(distance)

print(idx, distance-1, cnt)