import sys
input = sys.stdin.readline

n = int(input())

def get_prime():
    is_prime = [True] * (n+1)
    prime_list = []
    
    for i in range(2, n+1):
        if is_prime[i]:
            prime_list.append(i)
            j = 2
            while i*j <= n:
                is_prime[i*j] = False
                j += 1
    return prime_list

def get_prime_sum():
    global answer
    start = 0
    end = 1
    prime_sum = prime[0] + prime[1]
    while start < end:
        if prime_sum < n:
            end += 1
            prime_sum += prime[end]
        elif prime_sum > n:
            prime_sum -= prime[start]
            start += 1
        else:
            answer += 1
            end += 1
            prime_sum = prime_sum + prime[end] - prime[start]
            start += 1 

prime = get_prime()

answer = 0
if n > 2:
    get_prime_sum()

if n in prime:
    answer += 1
print(answer)