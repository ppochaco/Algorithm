import sys
input = sys.stdin.readline

n = int(input())

max_num = 1
room = 1

while True:
    if max_num >= n:
        print(room)
        break
    
    max_num += 6*room
    room += 1