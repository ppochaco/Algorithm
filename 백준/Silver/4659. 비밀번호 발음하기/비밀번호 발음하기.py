import sys
input = sys.stdin.readline

vowel = ['a', 'e', 'i', 'o', 'u']
alpha = []
for i in range(26):
    c = chr(ord('a')+i)
    alpha.append(c+c)
alpha.remove('ee')
alpha.remove('oo')

def check_password(word):
    # 1. 모음 하나 이상
    todigit = ''
    for c in word:
        if c in vowel:
            todigit += '1'
        else:
            todigit += '0'
    if todigit.find('1') == -1:
        return False

    # 2. 모음, 자음 연속 2개 이하
    if todigit.find('111') != -1:
        return False
    if todigit.find('000') != -1:
        return False
    
    # 3. 같은 글자 2개 연속 불가(ee, oo 제외)
    for cc in alpha:
        if cc in word:
            return False
    
    return True

while True:
    password = input().strip()
    if password == 'end':
        break
    
    if check_password(password):
        print("<"+password+"> is acceptable.")
    else:
        print("<"+password+"> is not acceptable.")