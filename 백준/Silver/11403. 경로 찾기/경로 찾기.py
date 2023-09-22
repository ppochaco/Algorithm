import sys
input = sys.stdin.readline

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]
temp_graph = graph[:]

INF = sys.maxsize
for i in range(n):
    for j in range(n):
        if graph[i][j] == 0:
            graph[i][j] = INF

def floyd_warshall():
    for k in range(n):
        for i in range(n):
            for j in range(n):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
        
floyd_warshall()

for i in range(n):
    for j in range(n):
        if graph[i][j] != INF and graph[i][j] != 0:
            print(1, end=' ')
        else:
            print(0, end=' ')
    print()