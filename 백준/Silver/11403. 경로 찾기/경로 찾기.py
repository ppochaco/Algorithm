import sys
input = sys.stdin.readline

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]

def floyd_warshall():
    for k in range(n):
        for i in range(n):
            for j in range(n):
                # i에서 k점 지나기 가능하면
                if graph[i][k] == 1:
                    # k에서 j 지나기 가능한지 체크
                    graph[i][j] = max(graph[i][j], graph[k][j])
        
floyd_warshall()

for i in range(n):
    for j in range(n):
        print(graph[i][j], end=' ')
    print()