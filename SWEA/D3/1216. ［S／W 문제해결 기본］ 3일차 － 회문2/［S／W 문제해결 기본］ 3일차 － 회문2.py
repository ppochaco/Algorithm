T = 10

def is_palindrome(arr, n):
    for i in range(n // 2):
        if arr[i] != arr[n - 1 - i]:
            return False

    return True


for _ in range(1, T + 1):
    tc = int(input())
    board = [input().strip() for _ in range(100)]
    transpose_board = list(zip(*board))
    answer = 0

    for x in range(100):
        for y in range(100):
            for i in range(1, 100):
                if 100 < y + i:
                    break

                if is_palindrome(board[x][y:y + i], i):
                    answer = max(answer, i)

                if is_palindrome(transpose_board[x][y:y + i], i):
                    answer = max(answer, i)

    print(f"#{tc} {answer}")
