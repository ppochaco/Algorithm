#include <iostream>
using namespace std;

int N, arr[2188][2188], cur_num, num_cnt[3];
bool check;

void paper(int row, int col, int n);

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    cin >> N;
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            cin >> arr[i][j];
        }
    }

    paper(0, 0, N);

    for(int i = 0; i < 3; i++) {
        cout << num_cnt[i] << '\n';
    }

    return 0;
}

void paper(int row, int col, int n) {
    if(n == 0) {
        return;
    }
    
    cur_num = arr[row][col];
    check = true;
    for(int i = row; i < row + n; i++) {
        for(int j = col; j < col + n; j++) {
            if(arr[i][j] != cur_num) {
                check = false;
                break;
            }
        }
    }

    if(!check) {
        n /= 3;
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                paper(row + i*n, col + j*n, n);
            }
        }
    }
    else {
        num_cnt[cur_num + 1]++; //  cur_num + 1 == index
    }
}