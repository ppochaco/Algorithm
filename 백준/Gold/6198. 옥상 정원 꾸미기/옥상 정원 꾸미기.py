import sys
input = sys.stdin.readline

n = int(input())
building = list(int(input()) for _ in range(n))

stack = [1000000001]
answer = 0

for i in range(n):
    while True:
        if building[i] < stack[-1]:
            answer += len(stack) - 1
            stack.append(building[i])
            break
        else:
            stack.pop()

print(answer)
