import sys
input = sys.stdin.readline

a, b = map(int, input().split())
answer = 0
while True:
    # print(a, b)
    if a == b:
        print(answer+1)
        break
    if a > b:
        print(-1)
        break

    if b % 2 == 0:
        b //= 2
    elif b % 10 == 1:
        b //= 10
    else:
        print(-1)
        break

    answer += 1
