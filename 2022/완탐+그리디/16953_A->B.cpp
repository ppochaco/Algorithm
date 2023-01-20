#include <iostream>
using namespace std;

int n, N, cnt;

int main() {
    cin >> n >> N;
    while(n != N) {
        if(N % 2 == 0) {
            N /= 2;
        }
        else if(N % 10 == 1) {
            N /= 10;
        }
        else {
            cnt = -2;
            break;
        }
        if(N < n) {
            cnt = -2;
            break;
        }
        cnt++;
    }
    cout << cnt + 1;
    return 0;
}