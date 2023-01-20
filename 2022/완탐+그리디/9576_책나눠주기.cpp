#include <iostream>
#include <algorithm>
using namespace std;

int test, n, m;
struct  application{
    int a;
    int b;
};
application info[1001];

bool cmp(application x, application y) {
    if(x.b != y.b) {
        return x.b < y.b;
    }
    return x.a < x.b;
}

int main() {
    cin >> test;
    for(int t = 0; t < test; t++) {
        int cnt = 0;
        bool book[1001] = {false};

        cin >> n >> m;
        for(int i = 0; i < m; i++) {
            cin >> info[i].a >> info[i].b;
        }

        sort(info, info + m, cmp);

        for(int i = 0; i < m; i++) {
            for(int j = info[i].a; j <= info[i].b; j++) {
                if(book[j] == false) {
                    cnt++;
                    book[j] = true;
                    break;
                }
            }
        }
        cout << cnt << '\n';
    }
    return 0;
}