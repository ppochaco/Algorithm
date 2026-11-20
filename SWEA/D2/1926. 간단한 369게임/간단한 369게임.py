N = int(input())

for i in range(1, N + 1):
    cnt = sum(c in '369' for c in str(i))
    if cnt == 0:
        print(i, end=' ')
    else:
        print('-' * cnt, end=' ')