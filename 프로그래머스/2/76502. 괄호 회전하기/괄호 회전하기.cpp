#include <string>
#include <vector>
#include <iostream>
#include <unordered_map>

using namespace std;

bool is_parentheses(string s);

int solution(string s) {
    int answer = 0;
    string ss = s + s;
    
    for (int i = 0; i < s.size(); i++) {
        string cur_s = ss.substr(i, s.size());
        if (is_parentheses(cur_s))
            answer++;
    }
    
    return answer;
}

bool is_parentheses(string s) {
    vector<char> stack;
    unordered_map<char, char> pairs = {
        { ')', '(' },
        { ']', '[' },
        { '}', '{' }
    };
    
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push_back(s[i]);
        } else {
            char c = stack.back();
            if (stack.empty())
                return false;
            
            if (stack.back() != pairs[s[i]])
                return false;
            
            stack.pop_back();
        }
    }
    
    if (!stack.empty())
        return false;
    
    return true;
}