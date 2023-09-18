import sys
input = sys.stdin.readline
from heapq import heappush, heappop

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    s, d, w = map(int, input().split())
    graph[s].append((d,w))

start, end = map(int, input().split())

INF = int(1e9)
distance = [INF]*(n+1)

def dijkstra(start):
    queue = []
    heappush(queue, (0, start))
    distance[start] = 0
    while queue:
        weight, node = heappop(queue)
        if distance[node] != weight:
            continue
        for next_node in graph[node]:
            v, w = next_node
            next_weight = weight + w
            if next_weight < distance[v]:
                distance[v] = next_weight
                heappush(queue, (next_weight, v))

dijkstra(start)
print(distance[end])