import sys
input = sys.stdin.readline
from heapq import heappush, heappop

n, e = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a].append((c, b))
    graph[b].append((c, a))

n1, n2 = map(int, input().split())
INF = int(1e9)

def dijkstra(start, end):
    queue = []
    visit = [INF]*(n+1)
    visit[start] = 0
    heappush(queue, (0, start))
    while queue:
        w, v = heappop(queue)
        if v == end:
            return visit[v]

        for next_w, next_v in graph[v]:
            next_weight = w + next_w
            if next_weight < visit[next_v]:
                visit[next_v] = next_weight
                heappush(queue, (next_weight, next_v))
    return INF

type1 = dijkstra(1,n1)+dijkstra(n1,n2)+dijkstra(n2,n)
type2 = dijkstra(1,n2)+dijkstra(n2,n1)+dijkstra(n1,n)

answer = min(type1, type2)
if answer >= INF:
    print(-1)
else:
    print(answer)