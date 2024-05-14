import sys
input = sys.stdin.readline

n, m = map(int, input().split())
chapter = []
for _ in range(m):
    d, p = map(int, input().split())
    chapter.append((d, p))

pages = [0]*(n+1)
for cur_chapter in range(m):
    cur_day, cur_page = chapter[cur_chapter]
    for day in range(n, 0, -1):
        if cur_day <= day:
            pages[day] = max(pages[day], pages[day - cur_day] + cur_page)

print(max(pages))
