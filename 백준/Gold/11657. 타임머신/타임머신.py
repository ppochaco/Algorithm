import sys
input = sys.stdin.readline

n, m = map(int, input().split())
graph = []
for _ in range(m):
    a, b, c = map(int, input().split())
    graph.append((a, b, c))

INF = sys.maxsize
def bellmanford(start):
    distance = [INF] * (n+1)
    distance[start] = 0

    for i in range(n):
        for j in range(m):
            cur_node, next_node, cur_weight = graph[j]
            if distance[cur_node] == INF:
                continue
            if distance[cur_node] + cur_weight < distance[next_node]:
                distance[next_node] = distance[cur_node] + cur_weight
                if i == n - 1:
                    return [-1]
    
    for i in range(n+1):
        if distance[i] == INF:
            distance[i] = -1
    
    return distance[2:]

print(*bellmanford(1), sep='\n')

