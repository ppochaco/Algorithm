from collections import Counter

T = int(input())

for test_case in range(1, T + 1):
    N, K = map(int, input().split())
    puzzle = []
    for i in range(N):
        puzzle.append(list(map(int, input().split())))

    def find_row_box():
        result = []
        for i in range(N):
            cnt = 0
            for j in range(N):
                if puzzle[i][j] == 1:
                    cnt += 1
                else:
                    if cnt > 0:
                        result.append(cnt)
                        cnt = 0

            if cnt > 0:
                result.append(cnt)

        count = Counter(result)

        return count[K]


    def find_col_box():
        result = []
        for j in range(N):
            cnt = 0
            for i in range(N):
                if puzzle[i][j] == 1:
                    cnt += 1
                else:
                    if cnt > 0:
                        result.append(cnt)
                        cnt = 0

            if cnt > 0:
                result.append(cnt)

        count = Counter(result)

        return count[K]

    answer = find_row_box() + find_col_box()
    print(f"#{test_case} {answer}")