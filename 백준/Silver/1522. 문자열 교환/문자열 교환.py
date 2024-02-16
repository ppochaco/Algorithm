import sys
input = sys.stdin.readline

string = input().strip()

n = len(string)
count_a = string.count('a')
string += string[:count_a-1]

answer = sys.maxsize
for i in range(n):
    answer = min(answer, string[i:i+count_a].count('b'))
print(answer)