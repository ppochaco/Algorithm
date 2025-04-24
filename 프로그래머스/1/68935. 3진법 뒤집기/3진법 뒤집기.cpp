#include <string>
#include <vector>
#include <cmath>
#include <iostream>
#include <algorithm> 

using namespace std;

int solution(int n) {
    int answer = 0;
    
    int k = 0;
    while(pow(3, k + 1) <= n) {
        k++;
    }
    
    vector<int> digits;
    while(k >= 0) {
        int three = pow(3, k);
        int a = n / three;
        int b = n % three;
        
        digits.push_back(a);
        n = b;
        k--;
    }
    reverse(digits.begin(), digits.end());
    
    for (int i = 0; i < digits.size(); i++) {      
        answer += pow(3, digits.size() - 1 - i) * (int)digits[i];
    }
    
    return answer;
}