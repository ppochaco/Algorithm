import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

stack = [arr[-1]]
answer = [-1]

for a in arr[::-1][1:]:
    while len(stack) and stack[-1] <= a:
        stack.pop()
    
    if not len(stack):    
        stack.append(a)
        answer.append(-1)
        continue

    answer.append(stack[-1])
    stack.append(a)

print(*answer[::-1])