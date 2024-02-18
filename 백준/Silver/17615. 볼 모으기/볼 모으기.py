import sys
input = sys.stdin.readline

n = int(input())
balls = input().strip()

def move_red():
    red_num = balls.count('R')

    if red_num == 0 or red_num == n:
        return 0

    odd_index = balls.index('B')
    left_num = balls[odd_index:].count('R')

    odd_index = balls.rindex('B')
    right_num = balls[:odd_index].count('R')

    return min(left_num, right_num)

def move_blue():
    blue_num = balls.count('B')

    if blue_num == 0 or blue_num == n:
        return 0

    odd_index = balls.index('R')
    left_num = balls[odd_index:].count('B')

    odd_index = balls.rindex('R')
    right_num = balls[:odd_index].count('B')

    return min(left_num, right_num)


print(min(move_red(), move_blue()))
