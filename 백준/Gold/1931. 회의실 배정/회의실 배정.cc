#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

vector < pair<int, int> > t;
int n, flag, cnt;

int main() {
    cin >> n;
    for(int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        t.push_back(pair<int, int>(b,a));
    }
    
    sort(t.begin(), t.end());

    for(int i = 0; i < n; i++) {
        if(flag <= t[i].second) {
            flag = t[i].first;
            cnt++;
        }
    }
    cout << cnt;

    return 0;
}