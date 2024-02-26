import sys
input = sys.stdin.readline

arr = input().strip()

# step1. 레이저 위치 구하기
laser_list = ''
i = 0
while i < len(arr):
    if arr[i] == '(' and arr[i+1] == ')':
        laser_list += 'L'
        i += 1
    else:
        laser_list += arr[i]
    i += 1

pipe = 0
# step2. 쇠막대기 길이, 위치 구하기
while True:
    if laser_list == 'L' * laser_list.count('L'):
        break
    start = laser_list.rindex('(')
    end = start + laser_list[start:].index(')')
    pipe += laser_list[start:end+1].count('L') + 1
    laser_list = laser_list[:start] + laser_list[start+1:end] + laser_list[end+1:]
print(pipe)