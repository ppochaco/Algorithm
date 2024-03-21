import sys
input = sys.stdin.readline

x, y, p1, p2 = map(int, input().split())

for _ in range(1000):
    if p1 == p2:
        print(p1)
        break

    if p1 > p2:
        p2 += y
    if p2 > p1:
        p1 += x
else:
    print(-1)