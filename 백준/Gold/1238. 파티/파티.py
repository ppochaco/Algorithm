import sys
input = sys.stdin.readline
from heapq import heappush, heappop

n, m, x = map(int, input().split())

to_graph = [[] for _ in range(n+1)]
from_graph = [[] for _ in range(n+1)]
for _ in range(m):
    s, e, t = map(int, input().split())
    to_graph[s].append((t, e))
    from_graph[e].append((t, s))

INF = int(1e9)
total_time = [0]*(n+1)

def dijkstra(graph):
    queue = []
    time = [INF] * (n+1)
    time[x] = 0
    heappush(queue, (0, x))
    while queue:
        t, v = heappop(queue)
        if time[v] != t:
            continue
        for next_t, next_v in graph[v]:
            next_time = t + next_t
            if next_time < time[next_v]:
                time[next_v] = next_time
                heappush(queue, (next_time, next_v))
    for i in range(1, n+1):
        total_time[i] += time[i]

dijkstra(to_graph)
dijkstra(from_graph)

print(max(total_time))