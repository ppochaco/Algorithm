import sys
input = sys.stdin.readline

n = int(input())
people = list(map(int, input().split()))
answer = [0 for _ in range(n)]

for i, k in enumerate(people):
    left = 0
    for j in range(n):
        if not answer[j]:
            if left == k:
                answer[j] = i + 1
                break
            else:
                left += 1
    
print(*answer)