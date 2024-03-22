import sys
from heapq import heappop, heappush
input = sys.stdin.readline

t = int(input())

INF = sys.maxsize
def daijkstra(start):
    time = [INF] * (n+1)
    time[start] = 0
    queue = [(0, start)]

    while queue:
        times, node = heappop(queue)

        if times < time[node]:
            continue
        
        for next_node, seconds in graph[node]:
            if time[node] + seconds < time[next_node]:
                time[next_node] = time[node] + seconds
                heappush(queue, (times + seconds, next_node))
    
    max_time = 0
    cnt = 0
    for cur_time in time:
        if cur_time == sys.maxsize:
            continue
        max_time = max(max_time, cur_time)
        cnt += 1
    return cnt, max_time

for _ in range(t):
    n, d, c = map(int, input().split())
    graph = [[] for _ in range(n+1)]
    for _ in range(d):
        a, b, s = map(int, input().split())
        graph[b].append((a, s))
    
    print(*daijkstra(c))
    