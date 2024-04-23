import sys
from heapq import heappush, heappop
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

INF = sys.maxsize
def dajikstra(start):
    queue = []
    visited = [INF]*(n+1)

    heappush(queue, (0, start))
    visited[start] = 0
    while queue:
        weight, node = heappop(queue)
        for next_node in graph[node]:
            if visited[next_node] != INF:
                continue
            visited[next_node] = weight + 1
            heappush(queue, (weight + 1, next_node))
    
    return visited[1:]

kevin_bacon = []
for i in range(1, n+1):
    kevin_bacon.append(sum(dajikstra(i)))

print(kevin_bacon.index(min(kevin_bacon)) + 1)