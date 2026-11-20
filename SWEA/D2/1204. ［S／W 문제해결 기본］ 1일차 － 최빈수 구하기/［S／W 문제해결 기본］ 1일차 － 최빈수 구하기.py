T = int(input())

for _ in range(1, T + 1):
    test_case = int(input())
    score = list(map(int, input().split()))

    dictionary = dict()
    for s in score:
        if dictionary.get(s):
            dictionary[s] += 1
        else:
            dictionary[s] = 1

    answer = [0, -1]
    for key in dictionary:
        if answer[0] < dictionary[key]:
            answer[0] = dictionary[key]
            answer[1] = key
        if answer[0] == dictionary[key]:
            answer[1] = max(answer[1], key)

    print(f"#{test_case} {answer[1]}")