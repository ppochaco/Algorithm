#include <iostream>
using namespace std;

int n, r, c;
int get_num(int r, int c, int n);

int main() {
    cin >> n >> r >> c;

    cout << get_num(r, c, n);    
    return 0;
}

int get_num(int r, int c, int n) {
    if(n == 0) {
        return 0;
    }
    return 2 * (r % 2) + (c % 2) + 4 * get_num(r / 2, c / 2, n - 1); // 현재 사분면 위치 + 이전 사분면의 위치의 num
   // 
}