import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]
indegree = [0] * (n+1)
for _ in range(m):
    temp = list(map(int, input().split()))
    for i in range(1, temp[0]):
        graph[temp[i]].append(temp[i+1])
        indegree[temp[i+1]] += 1

def topology_sort():
    queue = deque([])
    answer = []
    for i, cur in enumerate(indegree):
        if cur == 0 and i != 0:
            queue.append(i)
            answer.append(i)
    
    while queue:
        cur_node = queue.popleft()
        for next_node in graph[cur_node]:
            if next_node not in queue:
                indegree[next_node] -= 1
            if indegree[next_node] == 0:
                queue.append(next_node)
                answer.append(next_node)

    return answer

answer = topology_sort()
if len(answer) != n:
    print(0)
else:
    for i in answer:
        print(i)