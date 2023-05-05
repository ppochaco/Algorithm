#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int t, n, m, p;

int main(){
    cin >> t;
    while(t--) {
        cin >> n >> m;
        vector<int> v;
        queue<pair <int, int> > q;
        int cnt = 1;

        for(int i = 0; i < n; i++) {
            cin >> p;
            q.push(make_pair(i, p));
            v.push_back(p);
        }

        sort(v.begin(), v.end(), greater<int>());

        while(!q.empty()) {
            int idx = q.front().first;
            int pri = q.front().second;

            if(pri < v.front()) {
                q.push(q.front());
                q.pop();
            }
            else {
                if(idx == m) {
                    cout << cnt << '\n';
                    break;
                }
                else {
                    q.pop();
                    v.erase(v.begin());
                    cnt++;
                }
            }
        }
    }
    
    return 0;
}

