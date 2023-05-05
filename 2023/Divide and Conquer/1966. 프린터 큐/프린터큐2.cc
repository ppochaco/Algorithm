#include <iostream>
#include <queue>
using namespace std;

int t, n, m, p;

int main(){
    cin >> t;
    while(t--) {
        cin >> n >> m;
        queue<pair <int, int> > q;
        priority_queue<int> pq;
        int cnt = 0;

        for(int i = 0; i < n; i++) {
            cin >> p;
            q.push(make_pair(i, p));
            pq.push(p);
        }

        while(!q.empty()) {
            int idx = q.front().first;
            int pri = q.front().second;
            
            q.pop();
            if(pri == pq.top()) {
                pq.pop();
                cnt++;
                if(idx == m) {
                    cout << cnt << '\n';
                    break;
                }
            }
            else {
                q.push(make_pair(idx, pri));
            }
        }
    }
    return 0;
}