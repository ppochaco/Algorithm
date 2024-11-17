import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
tree = [[] for _ in range(n+1)]

for _ in range(n-1):
    a, b = map(int, input().split())
    tree[a].append(b)
    tree[b].append(a)

visited = [False] * (n + 1)
answer = [0] * (n + 1)
def visit_tree(start_node):
    queue = deque([start_node])
    visited[start_node] = True

    while queue:
        cur_node = queue.popleft()
        for next_node in tree[cur_node]:
            if not visited[next_node]:
                queue.append(next_node)
                visited[next_node] = True
                answer[next_node] = cur_node

visit_tree(1)

for i in range(2, n+1):
    print(answer[i])