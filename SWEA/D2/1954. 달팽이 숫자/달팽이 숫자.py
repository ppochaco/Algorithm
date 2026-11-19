T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    board = [[0 for _ in range(N)] for _ in range(N)]

    directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    cur_direction = 0
    number = 1
    x, y = [0, 0]
    while number <= N * N:
        board[x][y] = number
        number += 1

        nx, ny = [x + directions[cur_direction][0], y + directions[cur_direction][1]]
        if nx < 0 or ny < 0 or nx >= N or ny >= N or board[nx][ny]:
            cur_direction = (cur_direction + 1) % 4
            x, y = [x + directions[cur_direction][0], y + directions[cur_direction][1]]
        else:
            x, y = [nx, ny]


    print(f"#{test_case}")
    for row in board:
        for j in row:
            print(j, end=' ')
        print()