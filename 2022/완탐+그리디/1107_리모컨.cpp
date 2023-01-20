#include <iostream>
#include <cstdlib>
using namespace std;

int N, m, temp, shortest, clicks;
bool btn[10];

int min_distance();
bool is_available(int n);

int main() {
    cin >> N >> m;
    for(int i = 0; i < m; i++) {
        cin >> temp;
        btn[temp] = true;
    }

    shortest = min_distance();
    clicks = abs(N - shortest);

    for(int i = shortest; i > 0; i /= 10) {
        clicks++;
    }
    if(shortest == 0) {
        clicks++;
    }

    if(!(is_available(min_distance()))) {
        clicks = abs(N - 100);
    }
    else {
        clicks = min(abs(N - 100), clicks);
    }

    cout << clicks;

    return 0;
}

int min_distance() {
    for(int i = 0; i <= 500000; i++){
        if(is_available(N - i)){
            return N - i;
        }
        if(is_available(N + i)) {
            return N + i;
        }
    }
    return N;
}

bool is_available(int n) {
    if(n < 0) {
        return false;
    }
    else if(n == 0) {
        return !btn[0];
    }
    while(n) {
        if(btn[n % 10] == true) {
            return false;
        }
        n /= 10;
    }
    return true;
}