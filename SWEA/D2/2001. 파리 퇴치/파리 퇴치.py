T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    board = []
    for i in range(N):
        board.append(list(map(int, input().split())))

    answer = 0

    def get_fly(x, y):
        cnt = 0
        for i in range(M):
            for j in range(M):
                cnt += board[x + i][y + j]

        return cnt

    for i in range(N - M + 1):
        for j in range(N - M + 1):
            answer = max(answer, get_fly(i, j))

    print(f"#{test_case} {answer}")