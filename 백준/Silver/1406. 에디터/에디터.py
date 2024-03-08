import sys
from collections import deque
input = sys.stdin.readline

string = list(*input().split())
m = int(input())

left = deque(string)
right = deque([])
for _ in range(m):
    command = list(input().split())

    if len(command) == 2: #command == 'P $'
        _, char = command
        left.append(char)
    else:
        command = command[0]

    if command == 'L':
        if not left:
            continue
        right.appendleft(left.pop())

    if command == 'D':
        if not right:
            continue
        left.append(right.popleft())
    
    if command == 'B':
        if not left:
            continue
        left.pop()

print(''.join(left + right))