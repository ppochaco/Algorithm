import sys
input = sys.stdin.readline

n = int(input())
words = [input().strip() for _ in range(n)]
answer = set()
for word in words:
    answer.add(''.join(sorted(list(word))))

print(len(answer))