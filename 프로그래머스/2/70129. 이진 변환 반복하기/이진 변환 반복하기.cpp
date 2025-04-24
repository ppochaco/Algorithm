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
        s = "";
        
        while(num > 0) {
            s += to_string(num % 2);
            num /= 2;
        }
        reverse(s.begin(), s.end());

        answer[0]++;
    }
    
    return answer;
}