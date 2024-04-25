import sys
input = sys.stdin.readline

n = int(input())
graph = list(list(map(int, input().split())) for _ in range(n))
un_used = set()
answer = 0

def floyd_warshall():
    global answer
    
    for k in range(n):
        for i in range(n):
            for j in range(i, n):
                if i == j or i == k or j == k:
                    continue
                if graph[i][j] == graph[i][k] + graph[k][j]:
                    un_used.add((i,j))
                elif graph[i][k] + graph[k][j] < graph[i][j]:
                    answer = -1
                    
floyd_warshall()

if answer:
    print(-1)
else:
    for i in range(n):
        for j in range(i+1, n):
            if (i, j) not in un_used:
                answer += graph[i][j]

    print(answer)