def changeNum(n, k):
    num = []
    
    while k <= n:
        num.append(str(n % k))
        n //= k
    num.append(str(n % k))

    num.reverse()
    
    return num

def isPrime(n):
    for i in range(2, int(n**(1/2)) + 1):
        if n % i == 0:
            return False
    return True
        
def solution(n, k):    
    numStr = ''.join(changeNum(n,k))
    numList = numStr.split('0')
    print(numList)
    
    answer = []
    for num in numList:
        if num == '' or num =='1':
            continue
        if isPrime(int(num)):
            answer.append(num)
    
    return len(answer)

