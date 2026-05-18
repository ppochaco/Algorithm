from itertools import permutations

T = int(input())

for test_case in range(1, T + 1):
  N = int(input())
  arr = list(map(int, input().split()))
  work = [arr[0], arr[1]]
  home = [arr[2], arr[3]]
  customer = []
  for i in range(4, N * 2 + 4, 2):
    customer.append([arr[i], arr[i + 1]])
  
  answer = 100 * 12
  for cur in permutations(customer):
    distance = 0
    arr = [work] + list(cur) + [home]
    for i in range(1, N + 2):
      distance += abs(arr[i - 1][0] - arr[i][0]) + abs(arr[i - 1][1] - arr[i][1])

    answer = min(answer, distance)

  print(f"#{test_case} {answer}")
