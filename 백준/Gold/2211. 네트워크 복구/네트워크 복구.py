import sys
from heapq import heappush, heappop
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    graph[b].append((a, c))

INF = sys.maxsize
def dajikstra(start):
    queue = []
    visited = [INF] * (n+1)
    line = []

    heappush(queue, (0, start, 0))
    visited[start] = 0
    pre_node = start
    while queue:
        weight, node, pre_node = heappop(queue)
        if visited[node] < weight:
            continue
        line.append((pre_node, node))
        for next_node, next_weight in graph[node]:
            if visited[next_node] <= weight + next_weight:
                continue
            visited[next_node] = weight + next_weight
            heappush(queue, (visited[next_node], next_node, node))

    return line[1:]

restore = dajikstra(1)
print(len(restore))
for a,b in restore:
    print(a, b)