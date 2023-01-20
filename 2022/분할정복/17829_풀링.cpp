#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n, four[4];
vector<vector<int> > square;
vector<vector<int> > re_square;

int main() {
    cin >> n;
    square.resize(n, vector<int>(n));
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> square[i][j];
        }
    }

    while(n != 1) {
        //cout << "현재 n: " << n <<'\n';
        re_square.resize(n / 2, vector<int>(n / 2));
        for(int i = 0; i < n; i += 2) {
            for(int j = 0; j < n; j += 2) {
                four[0] = square[i][j];
                four[1] = square[i + 1][j];
                four[2] = square[i][j + 1];
                four[3] = square[i + 1][j + 1];
                
                sort(four, four + 4);
                re_square[i / 2][j / 2] = four[2];
                //cout << "현재 pick: " << four[2] <<'\n';
            }
        }
        n /= 2;
        //cout << "\nresize square!!\n";
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                square[i][j] = re_square[i][j];
                //cout << square[i][j] << ' ';
            }
            //cout << '\n';
        }
    }

    cout << square[0][0];

    return 0;
}