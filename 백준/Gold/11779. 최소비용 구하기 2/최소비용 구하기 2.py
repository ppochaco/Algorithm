import sys
from heapq import heappop, heappush
input = sys.stdin.readline

n = int(input())
m = int(input())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s].append((e,w))
start_city, end_city = map(int, input().split())

INF = sys.maxsize
def dajikstra(start):
    queue = []
    visited = [INF] * (n+1)
    parent = dict()
    heappush(queue, (0, start))
    visited[start] = 0
    while queue:
        cur_weight, cur_node = heappop(queue)
        if visited[cur_node] < cur_weight:
            continue
        for next_node, next_weight in graph[cur_node]:
            if cur_weight + next_weight < visited[next_node]:
                visited[next_node] = cur_weight + next_weight
                parent[next_node] = cur_node
                heappush(queue, (visited[next_node], next_node))

    child = end_city
    city_list = [child]
    while child != start_city:
        city_list.append(parent[child])
        child = parent[child]
    
    print(visited[end_city])
    print(len(city_list))
    print(*reversed(city_list))

dajikstra(start_city)