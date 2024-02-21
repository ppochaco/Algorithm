import sys
input = sys.stdin.readline

n = int(input())
student = list(map(int, input().split()))

num = 1
oneLine = []
while student:
    if num not in student:
        oneLine.remove(num)
    else:
        start = student.index(num)
        oneLine = student[:start][::-1] + oneLine
        student = student[start+1:]
    num +=1

sort_oneLine = sorted(oneLine)
if oneLine == sort_oneLine:
    print('Nice')
else:
    print('Sad')