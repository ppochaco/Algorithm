import sys
from heapq import heappush, heappop
input = sys.stdin.readline

v, e = map(int, input().split())
k = int(input())

INF = sys.maxsize
graph = [[] for _ in range(v+1)]
for _ in range(e):
    start, end, weight = map(int, input().split())
    graph[start].append((end, weight))

def dajikstra(start):
    queue = []
    visited = [INF] * (v+1)

    heappush(queue, (0, start))
    visited[start] = 0
    while queue:
        cur_weight, cur_node = heappop(queue)
        if visited[cur_node] < cur_weight:
            continue
        for next_node, next_weight in graph[cur_node]:
            if visited[next_node] < cur_weight + next_weight:
                continue
            visited[next_node] = cur_weight + next_weight
            heappush(queue, (visited[next_node], next_node))

    for i in range(1, v+1):
        if visited[i] == sys.maxsize:
            print('INF')
        else:
            print(visited[i])

dajikstra(k)