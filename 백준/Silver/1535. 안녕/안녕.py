import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

n = int(input())
hp_list = list(map(int, input().split()))
happy_list = list(map(int, input().split()))

hello = []
for i in range(n):
    hello.append((hp_list[i], happy_list[i]))
hello.sort(key=lambda x:-x[0])

max_happy = 0


def get_happy(depth, hp, happy):
    global max_happy

    if depth == n:
        if max_happy < happy:
            max_happy = happy
        return

    cur_hp, cur_happy = hello[depth]

    if hp - cur_hp > 0:
        get_happy(depth+1, hp - cur_hp, happy + cur_happy)
    get_happy(depth+1, hp, happy)


get_happy(0, 100, 0)
print(max_happy)