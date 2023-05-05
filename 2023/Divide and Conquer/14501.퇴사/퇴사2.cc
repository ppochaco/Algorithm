#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n, max_p;
int payment(int t);

int main(){
    cin >> n;
    vector<int> t(n), p(n), work(n + 1);
    for(int i = 0; i < n; i++) {
        cin >> t[i] >> p[i];
    }
    for(int i = 0; i < n + 1; i++) {
        if(t[i] + i <= n) {
            work[i] = p[i];
            for(int j = 0; j < i; j++) {
                if(t[j] + j <= i) {
                    work[i] = max(work[i], p[i] + work[j]);
                }
            }
            max_p = max(max_p, work[i]);
        }
    }
    cout << max_p;
    return 0;
}