import sys
input = sys.stdin.readline

n = int(input())
rgb = [0]*3
for _ in range(n):
    r, g, b = rgb[:]
    cur_r, cur_g, cur_b = map(int, input().split())
    cur_r += min(g, b)
    cur_g += min(b, r)
    cur_b += min(r, g)
    rgb = [cur_r, cur_g, cur_b]

print(min(rgb))
