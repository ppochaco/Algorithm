import sys
input = sys.stdin.readline

v, e = map(int, input().split())

INF = sys.maxsize
graph = [[INF]*(v+1) for _ in range(v+1)]
for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a][b] = c

def floyd_warshall():
    global answer
    for k in range(1, v+1):
        for i in range(1, v+1):
            for j in range(1, v+1):
                graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])
                if i == j:
                    answer = min(answer, graph[i][j])

answer = INF
floyd_warshall()

if answer != INF:
    print(answer)
else:
    print(-1)