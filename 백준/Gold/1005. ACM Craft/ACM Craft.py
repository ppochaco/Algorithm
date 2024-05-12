import sys
from collections import deque
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, k = map(int, input().split())
    time = [0] + list(map(int, input().split()))

    graph = [[] for _ in range(n+1)]
    in_degree = [0] * (n+1)
    for _ in range(k):
        a, b = map(int, input().split())
        graph[a].append(b)
        in_degree[b] += 1

    w = int(input())

    dp = [0] * (n+1)
    queue = deque([])

    for i in range(1, n+1):
        if in_degree[i] == 0:
            queue.append(i)
            dp[i] = time[i]

    while queue:
        cur_node = queue.popleft()

        for next_node in graph[cur_node]:
            in_degree[next_node] -= 1
            dp[next_node] = max(dp[next_node], dp[cur_node] + time[next_node])
            if in_degree[next_node] == 0:
                queue.append(next_node)

    print(dp[w])
