import sys
input = sys.stdin.readline

str = input().strip()
answer = 0

stack = ''
temp = 1

for i, cur in enumerate(str):
    stack += cur

    if cur == '(':
        temp *= 2
    elif cur == '[':
        temp *= 3
    elif cur == ')':
        if stack[-2:] != '()':
            answer = 0
            break
        if str[i-1] == '(':
            answer += temp
        temp //= 2
        stack = stack[:-2]
    elif cur == ']':
        if stack[-2:] != '[]':
            answer = 0
            break
        if str[i-1] == '[':
            answer += temp
        temp //= 3
        stack = stack[:-2]

if stack:
    print(0)
else:
    print(answer)