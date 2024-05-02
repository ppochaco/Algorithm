import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

step = list(map(int, input().split()))
step = step[:-1]
n = len(step)
INF = sys.maxsize

force = [
    [1,2,2,2,2],
    [0,1,3,4,3],
    [0,3,1,3,4],
    [0,4,3,1,3],
    [0,3,4,3,1],
]
dp = [[[0]*5 for _ in range(5)] for _ in range(n)]

def move_step(depth, left, right):
    if depth == n:
        return 0
    if dp[depth][left][right]:
        return dp[depth][left][right]
    
    next_step = step[depth]
    dp[depth][left][right] = min(move_step(depth+1, next_step, right) + force[left][next_step], move_step(depth+1, left, next_step) + force[right][next_step])

    return dp[depth][left][right]

print(move_step(0, 0, 0))