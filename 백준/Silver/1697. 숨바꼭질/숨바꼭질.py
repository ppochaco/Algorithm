import sys
input = sys.stdin.readline
from collections import deque

n, k = map(int, input().split())
visited = [0] * (10**5+1)

def find_bro():
    queue = deque([n])
    while queue:
        x = queue.popleft()
        if x == k:
            return
        for dx in [-1, 1, x]:
            nx = x + dx
            if (0<=nx<=10**5) and visited[nx] == 0:
                visited[nx] = visited[x] + 1
                queue.append(nx)
        
find_bro()
print(visited[k])