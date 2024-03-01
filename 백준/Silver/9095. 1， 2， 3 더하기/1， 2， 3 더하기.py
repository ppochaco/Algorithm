import sys
input = sys.stdin.readline

t = int(input())
method = [1, 2, 4]
for i in range(3, 11):
    cur = method[i-1] + method[i-2] + method[i-3]
    method.append(cur)

# print(method)

for _ in range(t):
    n = int(input())
    print(method[n-1])
