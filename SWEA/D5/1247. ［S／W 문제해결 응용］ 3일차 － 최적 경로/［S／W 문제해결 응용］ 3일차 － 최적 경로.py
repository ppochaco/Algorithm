T = int(input())

def calculate_distance(a, b):
  return abs(a[0] - b[0]) + abs(a[1] - b[1])

def dfs(depth, pre, distance):
  global answer

  if depth == N + 1:
    dis = calculate_distance(arr[pre], home)
    answer = min(answer, distance + dis)
    return
  
  if answer < distance:
    return
  
  for cur in range(N + 1):
    if visited[cur]:
      continue

    dis = calculate_distance(arr[cur], arr[pre])

    visited[cur] = True
    distance += dis

    dfs(depth + 1, cur, distance)
    
    visited[cur] = False
    distance -= dis


for test_case in range(1, T + 1):
  N = int(input())
  temp = list(map(int, input().split()))
  work = [temp[0], temp[1]]
  home = [temp[2], temp[3]]
  customer = []
  for i in range(4, N * 2 + 4, 2):
    customer.append([temp[i], temp[i + 1]])
  
  answer = 100 * 12
  visited = [False for _ in range(N + 1)]
  arr = [work] + customer
  
  visited[0] = True
  dfs(1, 0, 0)

  print(f"#{test_case} {answer}")
