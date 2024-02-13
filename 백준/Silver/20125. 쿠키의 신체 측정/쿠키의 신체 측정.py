import sys
input = sys.stdin.readline

n = int(input())
cookie = list(input().strip() for _ in range(n))

heart_row, heart_col = 0, 0
for i, line in enumerate(cookie):
    if line.count('*') == 1:
        heart_row = i + 1
        heart_col = line.index('*')
        break

mid = cookie[heart_row]
left_arm = mid[:heart_col].count('*')
right_arm = mid[heart_col+1:].count('*')

waist = 0
waist_row, waist_col = 0, 0
for i in range(heart_row+1, n):
    if cookie[i].count('*') != 1:
        waist = i - 1  - heart_row 
        waist_row = i
        waist_col = cookie[i-1].index('*')
        break

lower = []
for i in range(waist_row, n):
    lower.append(cookie[i])

lower = list(map(list, zip(*lower)))
left_leg = lower[waist_col-1].count('*')
right_leg = lower[waist_col+1].count('*')

print(heart_row+1, heart_col+1)
print(left_arm, right_arm, waist, left_leg, right_leg)