#include <iostream>
#include <vector>
using namespace std;

int N, arr[65][65], cur_num;
char input[65];
vector<char> result;
bool check;

void quad_tree(int row, int col, int n);

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> N;
    for(int i = 0; i < N; i++) {
        cin >> input;
        for(int j = 0; j < N; j++) {
            arr[i][j] = input[j] - '0';
        }
    }

    quad_tree(0,0,N);

    return 0;
}

void quad_tree(int row, int col, int n) {
    if(n == 1) {
        cout << arr[row][col];
        return;
    }
    
    cur_num = arr[row][col];
    check = true;

    for(int i = row; i < row + n; i++) {
        for(int j = col; j < col + n; j++) {
            if( arr[i][j] != cur_num) {
                check = false;
            }
        }
    }

    if(!check) {
        n /= 2;
        cout << '(';
        quad_tree(row, col, n);
        quad_tree(row, col + n, n);
        quad_tree(row + n, col, n);
        quad_tree(row + n, col + n, n);
        cout << ')';
    }
    else {
        cout << arr[row][col];
    }
}