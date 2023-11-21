def solution(s):
    s = s[2:len(s)-2].split('},{')
    answer = 0
    s.sort(key = lambda x : len(x))
    
    answer = []
    for nums in s:
        nums = list(map(int, nums.split(',')))
        for num in nums:
            if num not in answer:
                answer.append(num)

    return answer