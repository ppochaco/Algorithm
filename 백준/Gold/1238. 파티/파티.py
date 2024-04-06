import sys
from heapq import heappush, heappop
input = sys.stdin.readline

n, m, x = map(int, input().split())
to_road = [[] for _ in range(n+1)]
from_road = [[] for _ in range(n+1)]
for _ in range(m):
    start, end, weight = map(int, input().split())
    to_road[end].append((start, weight))
    from_road[start].append((end, weight))

INF = sys.maxsize
round_time = [0]*(n+1)

def daijkstra(road, start):
    queue = []
    time = [INF] * (n+1)

    heappush(queue, (0, start))
    time[start] = 0
    while queue:
        cur_time, cur_node = heappop(queue)
        if time[cur_node] < cur_time:
            continue
        for next_node, next_time in road[cur_node]:
            if cur_time + next_time < time[next_node]:
                time[next_node] = cur_time + next_time
                heappush(queue, (time[next_node], next_node))
    
    for i in range(1, n+1):
        round_time[i] += time[i]

daijkstra(to_road, x)
daijkstra(from_road, x)

print(max(round_time))