import sys
input = sys.stdin.readline

n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
for _ in range(k):
    i, j, x, y = map(int, input().split())
    arr_sum = 0
    for row in range(i-1, x):
        arr_sum += sum(board[row][j-1:y])
    print(arr_sum)