import sys
input = sys.stdin.readline

gears = [list(map(int, input().rstrip())) for _ in range(4)]
k = int(input())

def rotate_gear(gear, d):
    if d == 1:
        rotate = [gear[7]]
        rotate += gear[:-1]
        gear = rotate
    if d == -1:
        rotate = gear[1:]
        rotate.append(gear[0])
        gear = rotate
    return gear

for _ in range(k):
    n, d = map(int, input().split())
    n -= 1
    direction = [0]*4
    direction[n] = d
    for i in range(1, 4):
        if n + i < 4:
            if gears[n+i][6] != gears[n+i-1][2]:
                direction[n+i] = -direction[n+i-1]
            else:
                break
    for i in range(1, 4):
        if n - i >= 0:
            if gears[n-i+1][6] != gears[n-i][2]:
                direction[n-i] = -direction[n-i+1]
            else:
                break

    for i in range(4):
        gears[i] = rotate_gear(gears[i], direction[i])
   
answer = 0     
for i in range(4):
    if gears[i][0] == 1:
        answer += pow(2, i)

print(answer)