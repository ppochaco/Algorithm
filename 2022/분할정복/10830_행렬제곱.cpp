#include <iostream>
#include <vector>
using namespace std;

int n, matrix[5][5], temp[5][5], ans[5][5];
long long k;

void multiply_matrix(int arr1[][5], int arr2[][5]);

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n >> k;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
        ans[i][i] = 1; //ans 초기화
    }
    while(k > 0) {
        if(k % 2 == 1) {
            multiply_matrix(matrix, ans);
        }
        multiply_matrix(matrix, matrix);
        k /= 2;
    }

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cout << ans[i][j] << ' ';
        }
        cout << '\n';
    }

    return 0;
}

void multiply_matrix(int arr1[][5], int arr2[][5]) {
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            for(int k = 0; k < n; k++) {
                temp[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n;j ++) {
            arr2[i][j] = temp[i][j] % 1000;
            temp[i][j] = 0;
        }
    }
}