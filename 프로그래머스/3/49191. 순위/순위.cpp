#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int solution(int n, vector<vector<int>> results) {
    int answer = 0;
    vector<vector<int>> board(n, vector<int>(n, 0));
    
    for (auto cur : results) {
        int a = cur[0] - 1;
        int b = cur[1] - 1;

        board[a][b] = 1;
        board[b][a] = -1;
    }
    
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j || board[i][j] == -1 || board[i][j] == 1)
                    continue;
                
                if (board[i][k] == 1 && board[k][j] == 1) {
                    board[i][j] = 1;
                    board[j][i] = board[k][i] = board[j][k] = -1;
                }
            }
        }
    }
    
    for (auto row : board) {
        if (count(row.begin(), row.end(), 0) == 1)
            answer++;
    }
    
    return answer;
}