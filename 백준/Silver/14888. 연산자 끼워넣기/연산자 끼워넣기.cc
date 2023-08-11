#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N;
int op[4];

vector<int> v1;
vector<int> v2;
vector<int> v3;

int calc();
void dfs1(int);

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    int buf1;
    cin >> N;

    for (int i = 0; i < N; i++) {
        cin >> buf1;
        v1.push_back(buf1);
    } // 숫자 입력

    for (int i = 0; i < 4; i++) cin >> op[i]; // 연산자 입력

    dfs1(0); //dfs 

    sort(v3.begin(), v3.end()); // 오름차순으로 정렬

    cout << v3.back() << "\n";
    cout << v3[0];

    return 0;
}

int calc() {
    int ans = v1[0];

    for (int i = 0; i < N - 1; i++) {
        switch (v2[i]){ 
        case 0:
            ans += v1[i + 1];
            break;
        case 1:
            ans -= v1[i + 1];
            break;
        case 2:
            ans *= v1[i + 1];
            break;
        case 3:
            ans /= v1[i + 1];
            break;
        default:
            break;
        }
    }

    return ans;
}

void dfs1(int depth) {
    if (depth == N-1) {
        v3.push_back(calc());
        return;
    }
   
    for (int i = 0; i < 4; i++) {
        if (op[i] != 0) {
            op[i]--;
            v2.push_back(i);

            dfs1(depth + 1);

            op[i]++;
            v2.pop_back();
        }
    }
}