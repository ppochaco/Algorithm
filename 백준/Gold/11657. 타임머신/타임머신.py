import sys
input = sys.stdin.readline

n, m = map(int, input().split())
graph = []

cnt = 0
for _ in range(m):
    a, b, c = map(int, input().split())
    if a == 1:
        cnt += 1
    graph.append((a, b, c))

INF = sys.maxsize
time = [INF] * (n+1)

def belmanford(start_node):
    time[start_node] = 0

    for i in range(n):
        for start, end, weight in graph:
            if time[start] + weight < time[end]:
                time[end] = time[start] + weight
                if i == n - 1:
                    return False
    
    return True

if cnt == 0:
    for _ in range(n-1):
        print(-1)
    exit()

if belmanford(1):
    for i in range(2, n+1):
        if time[i] == sys.maxsize:
            print(-1)
        else:
            print(time[i])
else:
    print(-1)
