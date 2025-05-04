#include <iostream>
#include <vector>
using namespace std;

void homo(int depth, int index);

int n, m;
vector<int> num;

int main(){
    cin >> n >> m;
    num.resize(m);
    homo(0, 1);
    return 0;
}

void homo(int depth, int index) {
    if(depth == m){
        for(int i = 0; i < m; i++) {
            cout << num[i] << ' ';
        }
        cout << '\n';
        return;
    }

    for(int i = index; i <= n; i++){
        num[depth] = i;
        homo(depth + 1, i);
    }
}