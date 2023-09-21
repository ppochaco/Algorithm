import sys
input = sys.stdin.readline
from heapq import heappush, heappop

n, m, k, x = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)

INF = sys.maxsize
visited = [INF] * (n+1)

def dijkstra(start):
    queue = []
    visited[start] = 0
    heappush(queue, (0, start))
    while queue:
        d, v = heappop(queue)
        if d != visited[v]:
            continue
        for next_v in graph[v]:
            next_distance = d + 1
            if next_distance < visited[next_v]:
                visited[next_v] = next_distance
                heappush(queue, (next_distance, next_v))

dijkstra(x)
check = False
for i, distance in enumerate(visited):
    if distance == k:
        check = True
        print(i)
if not check:
    print(-1)