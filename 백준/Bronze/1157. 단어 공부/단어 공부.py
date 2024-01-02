from collections import Counter
import sys
input = sys.stdin.readline

word = input().rstrip().upper()
charCount = Counter(word)
mostCount = charCount.most_common()
if len(mostCount) > 1:
    if mostCount[0][1] == mostCount[1][1]:
        print('?')
    else:
        print(mostCount[0][0])
else:
    print(mostCount[0][0])