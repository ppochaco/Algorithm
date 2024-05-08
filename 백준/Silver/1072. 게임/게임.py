import sys
input = sys.stdin.readline

x, y = map(int, input().split())
pre_rate = y * 100 // x

def get_winning_rate(plus):
    rate = (y + plus) * 100 // (x + plus)
    return rate

def get_plus_game():
    left = 0
    right = x * 2
    while left <= right:
        mid = (left + right) // 2
        cur_rate = get_winning_rate(mid)
        if cur_rate == pre_rate:
            left = mid + 1
        else:
            right = mid - 1
    
    if get_winning_rate(left) != pre_rate:
        return left
    else:
        return -1

print(get_plus_game())
