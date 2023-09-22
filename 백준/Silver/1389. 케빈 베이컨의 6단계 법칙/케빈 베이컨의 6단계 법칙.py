import sys
input = sys.stdin.readline

n, m = map(int, input().split())

INF = sys.maxsize
graph = [[INF]*(n+1) for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a][b] = graph[b][a] = 1

for i in range(1, n+1):
    for j in range(1, n+1):
        if i == j:
            graph[i][j] = 0

def floyd_warshall():
    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])

floyd_warshall()

graph = [graph[i][1:] for i in range(1, n+1)]
num = []
for i,row in enumerate(graph):
    num.append((sum(row), i+1))

num.sort()
print(num[0][1])