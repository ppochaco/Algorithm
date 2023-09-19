import sys
input = sys.stdin.readline
from heapq import heappush, heappop

n, m, x = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(m):
    s, e, t = map(int, input().split())
    graph[s].append((t, e))

INF = int(1e9)

def go_to(start):
    queue = []
    time = [INF] * (n+1)
    time[start] = 0
    heappush(queue, (0, start))
    while queue:
        t, v = heappop(queue)
        if v == x:
            return time[v]
        if time[v] != t:
            continue
        for next_t, next_v in graph[v]:
            next_time = t + next_t
            if next_time < time[next_v]:
                time[next_v] = next_time
                heappush(queue, (next_time, next_v))

def back_to(end):
    queue = []
    time = [INF] * (n+1)
    time[x] = 0
    heappush(queue, (0, x))
    while queue:
        t, v = heappop(queue)
        if v == end:
            return time[end]
        if time[v] != t:
            continue
        for next_t, next_v in graph[v]:
            next_time = t + next_t
            if next_time < time[next_v]:
                time[next_v] = next_time
                heappush(queue, (next_time, next_v))

go_back_time = [0]*(n+1)
for i in range(1, n+1):
    go_back_time[i] = go_to(i) + back_to(i)

print(max(go_back_time))