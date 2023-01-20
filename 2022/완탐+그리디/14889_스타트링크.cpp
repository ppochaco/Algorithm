#include <iostream>
#include <algorithm>
#include <vector>
#include <cstdlib>
using namespace std;

int n, team[20], ability[20][20], score1, score2;
int min_distance = 0xfffff;

void make_team(int count, int node) {
    if(count == (n / 2)) {
        score1 = score2 = 0;
        for(int i = 0; i < n; i++) {
            for(int j = i; j < n; j++) {
                if(team[i] == 1 && team[j] == 1) {
                    score1 += ability[i][j] + ability[j][i];
                }
                else if(team[i] == 0 && team[j] == 0) {
                    score2 += ability[i][j] + ability[j][i];
                }
            }
        }
        min_distance = min(abs(score1 - score2), min_distance);
        
        return;
    }
    for(int i = max(node, count); i < n; i++) {
       team[i]++;
       make_team(count + 1, i + 1);
       team[i]--;
    }
}

int main() {
    cin >> n;

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> ability[i][j];
        }
    }
    
    team[0]++;
    make_team(1, 0);

    cout << min_distance;

    return 0;
}