import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

n, k = map(int, input().split())
board = [list(map(int, input().strip())) for _ in range(2)]
visited = [[False] * n for _ in range(2)]
dx = [0, 1, 0]
dy = [1, k, -1]

def move_user(x, y, time):
    if y >= n:
        return 1
    if y < time:
        return 0
    
    if board[x][y] and not visited[x][y]:
        visited[x][y] = True
        for i in range(3):
            nx, ny = (x + dx[i]) % 2, y + dy[i]
            if move_user(nx, ny, time + 1):
                return 1
        visited[x][y] = False
    
    return 0

print(move_user(0,0,0))
    