#include <iostream>
#include <vector>
using namespace std;

int t, n;

int main(){
    cin >> t;
    while(t--) {
        cin >> n;
        vector<pair <int, int> > num;
        num.push_back(make_pair(1, 0)); //fibo(0)
        num.push_back(make_pair(0, 1)); //fibo(1)
        for(int i = 2; i <= n; i++) { //fibo(2)부터
            int zero = num[i - 2].first + num[i - 1].first;
            int one = num[i - 2].second + num[i - 1].second;
            num.push_back(make_pair(zero, one));
        }

        cout << num[n].first << ' ' << num[n].second << '\n';

    }

    return 0;
}