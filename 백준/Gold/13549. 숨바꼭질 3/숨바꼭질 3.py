import sys
input = sys.stdin.readline
from heapq import heappop, heappush

subin, brother = map(int, input().split())
MAX_POINT = 100000
INF = int(1e9)
time = [INF]*(MAX_POINT+1)

def dijkstra(start):
    queue = []
    time[start] = 0
    heappush(queue, (0, start))
    while queue:
        t, p = heappop(queue)
        if p == brother:
            return
        if time[p] != t:
            continue
        for i, next_p in enumerate([p-1, p+1, 2*p]):
            if i < 2:
                next_t = 1
            else:
                next_t = 0
            if next_p < 0 or next_p > MAX_POINT:
                continue

            next_time = t + next_t
            if next_time < time[next_p]:
                time[next_p] = next_time
                heappush(queue, (next_time, next_p))

dijkstra(subin)
print(time[brother])