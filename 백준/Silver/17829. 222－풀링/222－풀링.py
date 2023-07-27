import sys
input = sys.stdin.readline

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]

def conquer(i, j):
    num = [matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]]
    num.sort()

    return num[2]

def divide(n):
    if n == 1:
        return matrix[0][0]

    for i in range(0, n, 2):
        for j in range(0, n, 2):
            matrix[i//2][j//2] = conquer(i, j)
    n //= 2

    return divide(n)

print(divide(n))