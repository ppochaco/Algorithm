import sys
input = sys.stdin.readline

n, x = map(int, input().split())
daily = list(map(int, input().split()))

period = []
visit = sum(daily[:x])
period.append(visit)
for i in range(1,n):
    if i + (x - 1) == n:
        break
    visit -= daily[i-1]
    visit += daily[i+x-1]
    period.append(visit)
period.sort(reverse=True)

max_visit = period[0]
if not max_visit:
    print("SAD")
else:
    print(max_visit)
    print(period.count(max_visit))