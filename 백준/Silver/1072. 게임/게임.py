import sys
input = sys.stdin.readline

x, y = map(int, input().split())
pre_rate = y * 100 // x

def get_winning_rate(plus):
    rate = (y + plus) * 100 // (x + plus)
    return rate

def get_plus_game():
    left = 0
    right = x
    answer = -1
    while left <= right:
        mid = (left + right) // 2
        cur_rate = get_winning_rate(mid)
        if pre_rate < cur_rate:
            answer = mid
            right = mid - 1
        else:
            left = mid + 1
    
    return answer

if pre_rate >= 99:
    print(-1)
else:
    print(get_plus_game())
