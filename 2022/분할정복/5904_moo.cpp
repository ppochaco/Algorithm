#include <iostream>
#include <vector>
using namespace std;

int N;
vector<char> S;

void moo(int n);

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> N;

    moo(0);

    cout << S[N - 1];

    return 0;
}

void moo(int n) {
    if(N <= S.size()) {
        return;
    }
    else {
        if(n == 0) {
            S.push_back('m');
            S.push_back('o');
            S.push_back('o');
        }
        else {
            S.push_back('m');
            for(int i = 0; i < n + 2; i++) {
                S.push_back('o');
            }
            moo(n-1);
        }
        moo(n + 1);
    }
}