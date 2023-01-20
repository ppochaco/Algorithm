#include <iostream>
#include <algorithm>
#define max_int 1000000000
using namespace std;

int n, num[12], opr[4], list[11], result, max_result, min_result;

void put_operator(int cnt);

int main() {
    max_result = -max_int;
    min_result = max_int;

    cin >> n;
    for(int i = 0; i < n; i++) {
        cin >> num[i];
    }
    for(int i = 0; i < 4; i++) {
        cin >> opr[i];
    }

    put_operator(0);

    cout << max_result << '\n' << min_result;

    return 0;
}

void put_operator(int cnt) {
    if(cnt == n - 1) {
        result = num[0];
        for(int i = 0; i < n - 1; i++) {
            switch (list[i]) {
            case 0:
                result += num[i + 1];
                break;
            case 1:
                result -= num[i + 1];
                break;
            case 2:
                result *= num[i + 1];
                break;
            default:
                result /= num[i + 1];
                break;
            }
        }
        min_result = min(min_result, result);
        max_result = max(max_result, result);
    }
    for(int i = 0; i < 4; i++) {
        if(opr[i] > 0) {
            opr[i]--;
            list[cnt] = i;
            put_operator(cnt + 1);
            opr[i]++;
        }
    }
}