import sys
input = sys.stdin.readline

n = int(input())

INF = sys.maxsize
graph = [[INF]*(n+1) for _ in range(n+1)]
while True:
    a, b = map(int, input().split())
    if a == -1 and b == -1:
        break
    graph[a][b] = graph[b][a] = 1

for i in range(1, n+1):
    graph[i][i] = 0

def floyd_warshall():
    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])

floyd_warshall()

candiate = [[] for _ in range(n+1)]
for i in range(1, n+1):
    grade = max(graph[i][1:])
    candiate[grade].append(i)

for i, member in enumerate(candiate):
    if member:
        print(i, len(member))
        print(*member)
        break