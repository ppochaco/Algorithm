import sys
input = sys.stdin.readline

n = int(input())

s = dict()
while n:
    string = list(input().strip().split())
    if len(string) == 1:
        operation = string[0]
        if operation == 'all':
            s = dict()
            for i in range(1,21):
                s[str(i)] = str(i)
        elif operation == 'empty':
            s = dict()
        
    else:
        operation, num = string

        if operation == 'add':
            if num not in s:
                s[num] = num
        elif operation == 'remove':
            if num in s:
                del s[num]
        elif operation == 'check':
            if num in s:
                print(1)
            else:
                print(0)
        elif operation == 'toggle':
            if num in s:
                del s[num]
            else:
                s[num] = num
        else:
            print("??")
            break

    n -= 1
