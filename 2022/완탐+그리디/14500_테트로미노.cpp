#include <iostream>
#include <algorithm>
using namespace std;

int n, m, map[501][501], answer;
int move_row[4] = {0, 0, -1, 1};
int move_col[4] = {-1, 1, 0, 0};
int block_row[4][4] = {{0,1,1,2}, {0,1,1,2}, {0,1,1,1}, {0,0,0,1}};
int block_col[4][4] = {{0,0,1,0}, {1,0,1,1}, {1,0,1,2}, {0,1,2,1}};
bool check[501][501];

void get_score(int cnt, int row, int col, int score);
void more_block(int row, int col);

int main() {
    cin >> n >> m;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            cin >> map[i][j];
        }
    }

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            check[i][j] = true;
            get_score(1, i, j, map[i][j]);
            check[i][j] = false;
        }
    }

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            more_block(i,j);
        }
    }
    
    cout << answer;
    
    return 0;
}

void get_score(int cnt, int row, int col, int score) {
    if(cnt == 4) {
        answer = max(answer, score);
        return;
    }
    for(int i = 0; i < 4; i++) {
        int r = row + move_row[i];
        int c = col + move_col[i];
        if((0 <= r && r < n) && (0 <= c && c < m)) {
            if(check[r][c] == false) {
                check[r][c] = true;
                get_score(cnt + 1, r, c, score + map[r][c]);
                check[r][c] = false;
            }
        }
    }
}

void more_block(int row, int col) {
    for(int i = 0; i < 4; i++) {
        int score = 0;
        for(int j = 0; j < 4; j++) {
            int r = block_row[i][j] + row;
            int c = block_col[i][j] + col;
            if((0 <= r && r < n) &&(0 <= c && c < m)) {
                score += map[r][c];
            }
        }
        answer = max(answer, score);
    }
}