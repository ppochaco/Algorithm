#include <iostream>
using namespace std;

int k, n, sum, pre;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> k;

    while(1) {
        sum = sum * 2 + (n + 3);
        if(k - sum == 1) {
            cout << 'm';
            break;
        }
        else if(k - sum < 1) {
            sum -= pre;
            if(k - pre == 1) {
                cout << 'm';
                break;
            }
            else if(k - pre < 1) {
                cout << 'o';
                break;
            }
            else {
                k -= sum;
                sum = 0;
                n = 0;
            }
        }
        else {
            n++;
        }
        pre = sum;
    }
    return 0;
}