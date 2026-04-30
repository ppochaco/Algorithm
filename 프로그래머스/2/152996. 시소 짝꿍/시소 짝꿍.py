from collections import Counter

def solution(weights):
    answer = 0
    counter = Counter(weights)
    
    for key, value in counter.items():
        if 1 < value:
            answer += value * (value - 1) // 2
    
    weights = set(weights)
    for ratio in [1/2, 2/3, 3/4]:
        for weight in weights:
            answer += counter[weight * ratio] * counter[weight]
            
    return answer