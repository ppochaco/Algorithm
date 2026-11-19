T = int(input())

for test_case in range(1, T + 1):
    answer = 0
    n = int(input())
    price = list(map(int, input().split()))

    max_price = price[-1]
    cnt = 0
    for i in range(n - 2, -1, -1):
        if max_price < price[i]:
            answer += cnt * max_price
            max_price = price[i]
            cnt = 0
        else:
            answer -= price[i]
            cnt += 1
    answer += cnt * max_price

    print(f"#{test_case} {answer}")