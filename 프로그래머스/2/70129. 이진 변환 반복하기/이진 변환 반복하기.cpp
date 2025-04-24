#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

vector<int> solution(string s) {
    vector<int> answer = {0, 0};
    
    while (s.size() > 1) {
        string x;
        for(int i = 0; i < s.size(); i++) {
            if (s[i] == '0')
                answer[1] += 1;
            else
                x += '1';
        }

        int num = x.size();
        vector <int> digits;

        while(num > 0) {
            digits.push_back(num % 2);
            num /= 2;
        }
        reverse(digits.begin(), digits.end());

        s = "";
        for (auto d : digits)
            s += to_string(d);

        answer[0]++;
    }
    
    return answer;
}