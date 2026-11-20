from collections import Counter

T = int(input())

for _ in range(1, T + 1):
    test_case = int(input())
    score = list(map(int, input().split()))

    counter = Counter(score)
    number, cnt= counter.most_common(1)[0]

    print(f"#{test_case} {number}")