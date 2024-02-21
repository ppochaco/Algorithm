import sys
from collections import Counter
input = sys.stdin.readline

n = int(input())

word = set()
for _ in range(n):
    word.add(''.join(sorted(input().strip())))
print(len(word))