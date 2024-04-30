import sys
input = sys.stdin.readline

tc = int(input())

INF = 10000 * 3000 * 500
def bellmanford(n, road):
    distance = [INF] * (n+1)
    distance[1] = 0
    
    for i in range(n):
        for j in range(len(road)):
            s, e, t = road[j]
            if distance[e] <= distance[s] + t:
                continue
            distance[e] = distance[s] + t
            if i == n-1:
                return 'YES' 
            
    return 'NO'

for _ in range(tc):
    n, m, w = map(int, input().split())
    road = []
    for _ in range(m):
        s, e, t = map(int, input().split())
        road.append((s, e, t))
        road.append((e, s, t))
    for _ in range(w):
        s, e, t = map(int, input().split())
        road.append((s,e,-t))
        
    
    print(bellmanford(n, road))