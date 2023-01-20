#include <iostream>
using namespace std;

int N, paper[128][128], cur_color, white, blue;
bool check;

void divide(int row, int col, int n);
void count_paper(int row, int col, int n);

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> N;
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            cin >> paper[i][j];
        }
    }

    count_paper(0, 0, N);

    cout << white << '\n' << blue;

    return 0;
}

void count_paper(int row, int col, int n) {
    if(n == 0) {
        return;
    }

    cur_color = paper[row][col];
    check = true;

    for(int i = row; i < row + n; i++) {
        for(int j = col; j < col + n; j++) {
            if(paper[i][j] != cur_color) {
                check = false;
            }
        }
    }

    if(!check) { // check가 false == 쪼개야 한다
        n /= 2;
        count_paper(row, col, n);
        count_paper(row + n, col, n);
        count_paper(row, col + n, n);
        count_paper(row + n, col + n, n);
    }
    else {
        if(cur_color == 0) {
            white++;
        }
        else {
            blue++;
        }
    }
    
}