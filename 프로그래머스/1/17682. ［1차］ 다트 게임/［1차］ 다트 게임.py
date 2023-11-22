def getNumber(arr):
    nums = []
    i, maxi = 0, len(arr)
    temp = ''
    
    while i < maxi:
        if arr[i].isdigit():
            temp += arr[i]
        else:
            nums.append(temp)
            temp = ''
        i += 1
        
    nums = ' '.join(nums).split()
    nums = list(map(int, nums))
    
    return nums

def getBonus(arr):
    bonus = []
    
    for c in arr:
        if c.isalpha():
            bonus.append(c)
            
    return bonus

def getOption(arr):
    options = []
    temp = ''
    
    for c in arr[1:]:
        if c.isdigit() and len(temp) > 0:
            temp = temp[-1]
            if temp == '#' or temp == '*':
                options.append(temp)
            else:
                options.append('')
            temp = ''
        else:
            temp += c
    
    for i, option in enumerate(options):
        if option == '*' and i > 0:
            options[i-1] += '*'
            
    return options

def getResult(num, bonus, option):
    grade = 0
    
    if bonus == 'S':
        grade = num
    elif bonus == 'D':
        grade = num**2
    elif bonus == 'T':
        grade = num**3
    
    multi = option.count('*')
    grade *= 2 ** multi
    
    if '#' in option:
        grade = -grade
    
    return grade
    
def solution(dartResult):
    dartResult = dartResult + '0'
    answer = 0
    
    nums = getNumber(dartResult)
    bonus = getBonus(dartResult)
    options = getOption(dartResult)
    
    for i in range(3):
        answer += getResult(nums[i], bonus[i], options[i])

    
    return answer

# 리스트 공백 없애기: join했다가 split 하기