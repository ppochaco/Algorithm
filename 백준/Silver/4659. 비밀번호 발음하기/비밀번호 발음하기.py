import sys
input = sys.stdin.readline

vowel = 'aeiou'
eo = 'eo'

def check_password(word):
    isvowel = False
    stack1 = 0
    stack2 = 0
    pre = ''
    for c in word:
        if c in vowel:
            stack1 += 1
            stack2 = 0
            isvowel = True
        else:
            stack2 += 1
            stack1 = 0
        # 2
        if stack1 == 3 or stack2 == 3:
            return False
        # 3
        if pre == c and (c not in eo):
            return False
        
        pre = c

    # 1
    if not isvowel:
        return False
    
    return True
    
while True:
    password = input().strip()
    if password == 'end':
        break
    
    if check_password(password):
        print(f'<{password}> is acceptable.')
    else:
        print(f'<{password}> is not acceptable.')