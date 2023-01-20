#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n;
vector< vector<int> > sqaure;

int second(int r, int c) {
    int temp[4] = {sqaure[r][c], sqaure[r + 1][c], sqaure[r][c + 1], sqaure[r + 1][c + 1]};
    sort(temp, temp + 4);
    return temp[2];
}

int four(int n) {
    if(n == 1) {
        return sqaure[0][0];
    }
    for(int i = 0, x = 0; i < n; i += 2, x++) {
        for(int j = 0, y = 0; j < n; j += 2, y++) {
            sqaure[x][y] = second(i, j);
        }
    }
    n /= 2;
    return four(n);
}

int main() {
    cin >> n;
    sqaure.resize(n, vector<int>(n));
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> sqaure[i][j];
        }
    }
    cout << four(n);

    return 0;
}