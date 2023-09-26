import sys
input = sys.stdin.readline

n, m, r = map(int, input().split())
area_item = list(map(int, input().split()))

INF = sys.maxsize
graph = [[INF]*(n+1) for _ in range(n+1)]
for _ in range(r):
    a, b, L = map(int, input().split())
    graph[a][b] = graph[b][a] = L
for i in range(1, n+1):
    graph[i][i] = 0

def floyd_warshall():
    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])

floyd_warshall()

items = [0]*(n+1)
for i in range(1, n+1):
    for j in range(1, n+1):
        if graph[i][j] <= m:
            items[i] += area_item[j-1]

print(max(items))