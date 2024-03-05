import sys
input = sys.stdin.readline

e, s, m = map(int, input().split())
year = 1

while True:
    if year == 7981:
        break
    cur_e = year % 15
    cur_s = year % 28
    cur_m = year % 19

    if cur_e == 0:
        cur_e = 15
    if cur_s == 0:
        cur_s = 28
    if cur_m == 0:
        cur_m = 19

    if cur_e == e and cur_s == s and cur_m == m:
        break

    year += 1
    # print(year, cur_e, cur_s, cur_m)

print(year)