#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

//곱하기, 나누기 연산 줄이기

int n, k;
vector<int> arr;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n;
    arr.resize(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cin >> k;

    int start_pt = 0;
    int s = n/k;
    for(int i = 0; i < k; i++) {
        sort(arr.begin() + start_pt, arr.begin() + start_pt + s);
        start_pt += s;
    }

    for(int i = 0; i < n; i++) {
        cout << arr[i] << ' ';
    }

    return 0;
}