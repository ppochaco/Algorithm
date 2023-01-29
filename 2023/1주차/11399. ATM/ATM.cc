#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n, sum;

int main(){
    cin >> n;
    vector<int> p(n);
    for(int i = 0; i < n; i++) {
        cin >> p[i];
    }
    sort(p.begin(), p.end(), greater<int>());

    for(int i = 0; i < n; i++) {
        sum += (i + 1) * p[i];
    }
    cout << sum;
    return 0;
}