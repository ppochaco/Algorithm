import sys
from collections import Counter
input = sys.stdin.readline

n, k = map(int, input().split())
country = []

for _ in range(n):
    num, gold, sliver, bronze = map(int, input().split())
    country.append((gold, sliver, bronze, num))

country.sort(key = lambda x:(x[0], x[1], x[2]), reverse=True)

country_list = []
country_dic = list()
for i,cur in enumerate(country):
    string = ''.join(map(str,cur[:3]))
    country_dic.append(string)
    num = cur[3]
    country_list.append(num)

country_count = Counter(country_dic)

rank_list = []
rank = 1
while rank <= n:
    cur = country_dic[rank-1]
    count = country_count[cur]
    for _ in range(count):
        rank_list.append(rank)
    rank += count

# print(country_list)
# print(rank_list)
index = country_list.index(k)
print(rank_list[index])