import sys
input = sys.stdin.readline

n, m = map(int, input().split())

INF = sys.maxsize
graph = [[INF]*(n+1) for _ in range(n+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a][b] = 1
    

def floyd_warshall():
    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                # graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])
                if graph[i][k] + graph[k][j] == 2:
                    graph[i][j] = 1

floyd_warshall()

check = [0]*(n+1)
for i in range(1, n+1):
    for j in range(1, n+1):
        if graph[i][j] == 1:
            check[i] += 1
            check[j] += 1

print(check.count(n-1))