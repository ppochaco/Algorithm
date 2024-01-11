import sys
input = sys.stdin.readline

gameList = ['Y', 'F', 'O']

n, game = input().split()
n = int(n)

userList = set()
for i in range(n):
    user = input().strip()
    userList.add(user)

userCount = len(userList)
gameNum = gameList.index(game) + 1
print(userCount // gameNum)