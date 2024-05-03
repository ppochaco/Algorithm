import sys
input = sys.stdin.readline

n, c = map(int, input().split())
home = list(int(input()) for _ in range(n))

home.sort()

def get_wifi_num(gap):
    pre = home[0]
    count = 1
    for cur in home:
        if cur - pre >= gap:
            pre = cur
            count += 1
    return count

answer = 0
left = 1
right = home[-1] - home[0]
while left <= right:
    mid = (left + right) // 2
    wifi = get_wifi_num(mid)
    
    if wifi >= c:
        left = mid + 1
        answer = mid
    else:
        right = mid - 1

print(answer)