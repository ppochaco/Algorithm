from collections import Counter
import sys
input = sys.stdin.readline

word = input().rstrip().upper()
charCount = Counter(word)
mostCountAlpha, mostCountNum = charCount.most_common()[0]

def get_char(maxAlpha, maxNum):
    for key, count in charCount.items():
        if key != maxAlpha and count == maxNum:
            return '?'
    return maxAlpha

print(get_char(mostCountAlpha, mostCountNum))