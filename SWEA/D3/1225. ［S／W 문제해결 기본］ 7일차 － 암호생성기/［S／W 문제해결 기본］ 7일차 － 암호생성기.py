T = 10

for _ in range(1, T + 1):
  tc = int(input())
  arr = list(map(int, input().split()))
  
  index = 0
  minus = [1, 2, 3, 4, 5]
  check = False
  while not check:
    for i, m in enumerate(minus):
      cur_index = (index + i) % 8
      arr[cur_index] -= m
      
      if arr[cur_index] <= 0:
        arr[cur_index] = 0
        check = True
        break
    
    index = (index + 5) % 8

  zero_index = arr.index(0)
  answer = ' '.join(map(str,arr[zero_index + 1:] + arr[:zero_index + 1]))
  print(f"#{tc} {answer}")