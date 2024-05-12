import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
in_degree = [0] * (n+1)
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    in_degree[b] += 1


def topological_sort():
    queue = deque([])
    answer = []
    for i in range(1, n+1):
        if in_degree[i] == 0:
            queue.append(i)

    while queue:
        cur_node = queue.popleft()
        answer.append(cur_node)

        for next_node in graph[cur_node]:
            in_degree[next_node] -= 1
            if in_degree[next_node] == 0:
                queue.append(next_node)

    return answer


print(*topological_sort())
