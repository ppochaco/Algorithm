import sys
input = sys.stdin.readline

n = int(input())
arr = list(int(input().strip()) for _ in range(n))

stack = []
answer = []
i = 1
index = 0
while True:
    if not stack:
        # 모든 수열을 봤을 때 성공
        if index == n:
            for j in answer:
                print(j)
            break
        # 정수가 n을 초과했을 때 실패
        if i > n:
            print('NO')
            break
        
        # 수열을 덜 봤을 때 정수 넣어주기
        stack.append(i)
        answer.append('+')
        i += 1
        continue

    if arr[index] == stack[-1]:
        stack.pop()
        answer.append('-')
        index += 1
    elif arr[index] < stack[-1]:
        print('NO')
        break
    else:
        stack.append(i)
        answer.append('+')
        i += 1