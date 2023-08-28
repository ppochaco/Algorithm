import sys, copy
input = sys.stdin.readline

n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
cloud_direction = []
for _ in range(m):
    d, s = map(int, input().split())
    cloud_direction.append((d-1, s))

dx = [0, -1, -1, -1, 0, 1, 1, 1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]

# 비바라기 시전하기
cloud = [(n-1, 0), (n-1, 1), (n-2, 0), (n-2, 1)]

# 구름 이동하기
for cur_d in cloud_direction:
    visited = [[False]*n for _ in range(n)]
    # d방향으로 s칸 이동
    d, s = cur_d
    for index, cur_cloud in enumerate(cloud):
        x, y = cur_cloud
        nx, ny = (x + dx[d]*s) % n, (y + dy[d]*s) % n
        cloud[index] = (nx, ny)
        visited[nx][ny] = True
    
    # 비바구니 1 증가
    for cur_cloud in cloud:
        x, y = cur_cloud
        board[x][y] += 1

    # 물 복사 버그
    new_board = copy.deepcopy(board)
    for cur_cloud in cloud:
        x, y = cur_cloud
        count = 0
        for i in range(1, 8, 2):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= n:
                continue
            if board[nx][ny] > 0:
                count += 1
        new_board[x][y] += count
    board = copy.deepcopy(new_board)

    # 새로운 구름 생기기
    new_cloud = []
    for i in range(n):
        for j in range(n):
            if board[i][j] >= 2 and not visited[i][j]:
                new_cloud.append((i,j))
                board[i][j] -= 2

    # 기존 구름 사라지기
    cloud = new_cloud

water = 0
for i in range(n):
    for j in range(n):
        water += board[i][j]
print(water)