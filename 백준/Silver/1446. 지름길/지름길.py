import sys
input = sys.stdin.readline

n, d = map(int, input().split())

short_cut = []
for _ in range(n):
    start, end, length = map(int, input().split())
    if end > d:
        continue
    if length >= end - start:
        continue
    short_cut.append([start, end, length])
short_cut.sort()

pre = (0,0)
temp = []
for s, e, l in short_cut:
    if (s, e) == pre:
        continue
    temp.append([s,e,l])
    pre = (s, e)
short_cut = temp[:]

short_list = set()
def get_short(point, depth, distance):
    # print(depth, point, distance)
    if depth == len(short_cut):
        if distance > 0:
            short_list.add((point, distance))
        return

    start, end, length = short_cut[depth]
    get_short(point, depth+1, distance)
    if start < point:
        return
    get_short(end, depth+1, distance+length+start-point)

get_short(0,0,0)

answer = d
# print(short_list)
for point, distance in short_list:
    distance += d - point
    answer = min(answer, distance)

print(answer)