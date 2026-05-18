T = int(input())
INF = float('inf')

def manhattan(a, b):
  return abs(a[0] - b[0]) + abs(a[1] - b[1])

for test_case in range(1, T + 1):
  N = int(input())
  temp = list(map(int, input().split()))

  company = [temp[0], temp[1]]
  home = [temp[2], temp[3]]
  customers = []
  for i in range(4, N * 2 + 4, 2):
    customers.append([temp[i], temp[i + 1]])

  dp = [[INF] * N for _ in range(1 << N)]

  for i in range(N):
    dp[1 << i][i] = manhattan(company, customers[i])

  for mask in range(1 << N):
    for i in range(N):
      if not (mask & (1 << i)):
        continue
      if dp[mask][i] == INF:
        continue

      for j in range(N):
        if mask & (1 << j):
          continue

        new_mask = mask | (1 << j)
        dist = manhattan(customers[i], customers[j])
        dp[new_mask][j] = min(dp[new_mask][j], dp[mask][i] + dist)
  
  full_mask = (1 << N) - 1
  answer = INF

  for i in range(N):
    result = dp[full_mask][i] + manhattan(customers[i], home)
    answer = min(answer, result)

  print(f"#{test_case} {answer}")
