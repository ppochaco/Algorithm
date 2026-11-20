N = int(input())
number = [i for i in range(N + 1)]

def remove_369(num):
    for i in range(num, N + 1, 10):
        number[i] = '-'

def remove_306090(num):
    for i in range(num, min(N, num + 10)):
        if number[i] == '-':
            number[i] += '-'
        else:
            number[i] = '-'

def remove_300600900(num):
    for i in range(num, min(N, num + 100)):
        if number[i] == '-':
            number[i] += '-'
        else:
            number[i] = '-'

for i in [3, 6, 9]:
    remove_369(i)

for i in [30, 60, 90]:
    remove_306090(i)

for i in [300, 600, 900]:
    remove_300600900(i)

print(*number[1:])