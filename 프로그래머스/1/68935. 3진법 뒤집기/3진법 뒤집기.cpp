#include <string>
#include <vector>
#include <cmath>
#include <iostream>

using namespace std;

int solution(int n) {
    int answer = 0;

    vector<int> digits;
    while(n > 0) {
        digits.push_back(n % 3);
        n = n / 3;
    }
    
    int k = 1;
    for (int i = digits.size() - 1; i >= 0; i--) {      
        answer += k * digits[i];
        k *= 3;
    }
    
    return answer;
}