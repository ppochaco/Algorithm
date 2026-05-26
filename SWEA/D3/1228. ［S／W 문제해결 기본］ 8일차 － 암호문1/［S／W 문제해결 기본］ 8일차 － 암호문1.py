T = 10

for test_case in range(1, T + 1):
    N = int(input())
    cipher = list(input().split())
    I = int(input())
    command = list(cur.strip() for cur in input().split('I'))

    for i in range(1, I + 1):
        c = command[i].split()
        x, y = map(int, [c[0], c[1]])
        s = c[2:]
        cipher = cipher[:x] + s + cipher[x:]

    answer = ' '.join(cipher[:10])
    print(f"#{test_case} {answer}")

