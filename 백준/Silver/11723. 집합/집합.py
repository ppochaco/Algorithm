import sys
input = sys.stdin.readline

s = 0
a = (1 << 21) - 1
e = 0

n = int(input())
for _ in range(n):
    operation = input().rstrip()
    if operation == 'all':
        s = a
        continue
    elif operation == 'empty':
        s = e
        continue

    operation, num = operation.split()
    num = 1<<(20 - int(num))
    if operation == 'add':
        s = s|num
    elif operation == 'remove':
        num = ~num
        s = s&num
    elif operation == 'toggle':
        s = s^num
    elif operation == 'check':
        print(int(bool(s&num)))