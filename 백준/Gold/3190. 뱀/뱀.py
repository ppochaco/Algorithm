import sys
input = sys.stdin.readline

n = int(input())
k = int(input()) # 사과 개수
board = [[0]* (n+1) for _ in range(n+1)]

for _ in range(k):
    x, y = map(int, input().split())
    board[x][y] = 2

l = int(input()) # 방향 변환 횟수
time = []
direction = []

for _ in range(l):
    x, c = input().split()
    time.append(x)
    direction.append(c)

x, y = 1, 1
board[x][y] = 1
dx, dy = 0, 1
next_time = int(time.pop(0))
next_d = direction.pop(0)
cur_time = 0
snake = [(x,y)]

while True:
    # 시간되면 방향 바꾸기
    if cur_time == next_time:
        if next_d == 'L':
            dx, dy = -1 * dy, dx
        else:
            dx, dy = dy, -1 * dx
        if len(time) != 0:
            next_time = int(time.pop(0))
            next_d = direction.pop(0)

    # 한 칸씩 이동하기
    nx, ny = x + dx, y + dy

    # 맵 밖에 나가면 탈출
    if nx <= 0 or nx > n or ny <= 0 or ny > n:
        break
    # 뱀에 닿으면 탈출
    if board[nx][ny] == 1:
        break

    if board[nx][ny] != 2: # 사과 없으면 꼬리 이동
        px, py = snake.pop(0)
        board[px][py] = 0
        
    # 머리 이동
    board[nx][ny] = 1
    snake.append((nx, ny))
    
    # 1초 증가
    cur_time += 1
    x, y = nx, ny

print(cur_time + 1)