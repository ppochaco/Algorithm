T = int(input())

codes = ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"]

def verify_codes(s):
  odd = 0
  even = 0
  
  for i in range(0, 8):
    number = get_number(s + i * 7, row)

    if number == -1:
      return 0
    
    if (i + 1) % 2:
      odd += number
    else:
      even += number

  sum = odd * 3 + even
  if sum % 10:
    return 0
  return odd + even


def get_number(i, row):
  for number, code in enumerate(codes):
    if code == row[i:i+7]:
      return number
        
  return -1

for test_case in range(1, T + 1):
  N, M = map(int, input().split())
  arr = [input() for _ in range(N)]
  answer = 0

  for row in arr:
    if "1" in row:
      end_index = -1
      for j in range(M):
        if row[j] == "1":
          end_index = j
      start_index = end_index - 56 + 1
      
      answer = verify_codes(start_index)
      break
  
  print(f"#{test_case} {answer}")