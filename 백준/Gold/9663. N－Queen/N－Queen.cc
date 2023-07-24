#include <iostream>
using namespace std;

int n, dia1[30], dia2[30], col[15], cnt;
void queen(int depth);

int main() {
    cin >> n;
    queen(0);
    cout << cnt;
    return 0;
}

void queen(int depth) {
    if(depth == n) {
        cnt++;
        return;
    }
    int r = depth;
    for(int c = 0; c < n; c++) {
        if(col[c] + dia1[r+c] + dia2[(r-c) + (n-1)]) {
            continue;
        }
        col[c] = dia1[r+c] = dia2[(r-c) + (n-1)] = 1;
        queen(depth + 1);
        col[c] = dia1[r+c] = dia2[(r-c) + (n-1)] = 0;
    }
}