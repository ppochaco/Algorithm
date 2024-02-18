import sys
input = sys.stdin.readline

n = int(input())
balls = input().strip()

def move_red():
    mod = ''
    red_num = balls.count('R')
    left_odd = balls[:red_num].count('B')
    right_odd = balls[n-red_num:].count('B')

    if not left_odd or not right_odd:
        return 0

    if left_odd < right_odd:
        mod = 'L'
    else:
        mod = 'R'

    num = 0
    if mod == 'L':
        odd_index = balls.index('B')
        num = balls[odd_index:].count('R')
    else:
        odd_index = balls.rindex('B')
        num = balls[:odd_index].count('R')

    return num

def move_blue():
    mod = ''
    blue_num = balls.count('B')
    left_odd = balls[:blue_num].count('R')
    right_odd = balls[n-blue_num:].count('R')

    if not left_odd or not right_odd:
        return 0

    if left_odd < right_odd:
        mod = 'L'
    else:
        mod = 'R'

    num = 0
    if mod == 'L':
        odd_index = balls.index('R')
        num = balls[odd_index:].count('B')
    else:
        odd_index = balls.rindex('R')
        num = balls[:odd_index].count('B')

    return num

print(min(move_red(), move_blue()))