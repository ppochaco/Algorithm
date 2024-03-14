import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
graph = [[] for _ in range(n+1)]

for _ in range(n-1):
    parent, child, weight = map(int, input().split())
    graph[parent].append((child, weight))
    graph[child].append((parent, weight))

def visit_node(start):
    visited = [0] * (n+1)
    queue = deque([(start, 0)])
    visited[start] = -1

    while queue:
        cur_node, cur_weight = queue.popleft()
        for next_node, next_weight in graph[cur_node]:
            if visited[next_node] != 0:
                continue
            visited[next_node] = cur_weight + next_weight
            queue.append((next_node, next_weight + cur_weight))
    
    max_weight = max(visited)
    max_node = visited.index(max_weight)

    return  max_node, max_weight

node, _ = visit_node(1)
_, max_weight = visit_node(node)
print(max_weight)