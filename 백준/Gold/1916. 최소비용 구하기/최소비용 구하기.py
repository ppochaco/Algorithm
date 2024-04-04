import sys
from heapq import heappush, heappop
input = sys.stdin.readline

n = int(input())
m = int(input())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s].append((e,w))
sp, ep = map(int, input().split())

INF = float('inf')
def dajikstra(start, end):
    queue = []
    visited = [INF] * (n+1)

    heappush(queue, (0, start))
    visited[start] = 0
    while queue:
        weight, node = heappop(queue)
        if visited[node] < weight:
            continue
        for next_node, next_weight in graph[node]:
            new_weight = weight + next_weight
            if visited[next_node] <= new_weight:
                continue
            visited[next_node] = new_weight
            heappush(queue, (new_weight, next_node))
    
    return visited[end]

print(dajikstra(sp, ep))