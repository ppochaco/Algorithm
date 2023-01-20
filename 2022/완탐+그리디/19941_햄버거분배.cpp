#include <iostream>
using namespace std;

int n, k, cnt;
char table[20001];

int main() {
    cin >> n >> k >> table;

    for(int i = 0; i < n; i++) {
        if(table[i] == 'P') {
            for(int j = -k; j <= k; j++) {
                if(table[i + j] == 'H') {
                    cnt++;
                    table[i + j] = 'X';
                    break;
                }
            }
        }
    }

    cout << cnt;

    return 0;
}