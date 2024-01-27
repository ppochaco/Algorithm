import sys
input = sys.stdin.readline

n, d, k, c = map(int, input().split())
sushi = []
for _ in range(n):
    sushi.append(int(input()))
sushi.extend(sushi[:k-1])

max_len = 0
for start in range(len(sushi)):
    end = start + k
    cur = set(sushi[start:end])
    if c not in cur:
        cur.add(c)
    max_len = max(max_len, len(cur))

print(max_len)