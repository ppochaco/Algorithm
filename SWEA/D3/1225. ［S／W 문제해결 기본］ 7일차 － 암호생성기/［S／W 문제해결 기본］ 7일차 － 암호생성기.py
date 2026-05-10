from collections import deque

T = 10

for _ in range(1, T + 1):
  tc = int(input())
  arr = deque(map(int, input().split()))
  
  number = 1
  while True:
    cur = arr.popleft() - number
  
    if cur <= 0:
      arr.append(0)
      break

    arr.append(cur)
    
    number += 1
    if number == 6:
      number = 1

  print(f"#{tc}", *arr)