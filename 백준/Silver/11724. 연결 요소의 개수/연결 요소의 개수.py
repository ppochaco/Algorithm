import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

n, m = map(int,input().split())
graph = [[] for _ in range(n+1)]
visited = [False] * (n+1)
connect = 0

def dfs(x):
    visited[x] = True
    for i in graph[x]:
        if visited[i] == False:
            dfs(i)

for i in range(m):
    v1, v2 = map(int, input().split())
    graph[v1].append(v2)
    graph[v2].append(v1)

for i in range(1, n+1):
    if visited[i] == False:
        dfs(i)
        connect += 1

print(connect)