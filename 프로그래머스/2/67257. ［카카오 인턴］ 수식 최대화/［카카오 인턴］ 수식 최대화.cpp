#include <string>
#include <vector>
#include <iostream>

using namespace std;

long long calculate(vector<long long> nums, vector<char> operators, string targets);

long long solution(string expression) {
    long long answer = 0;
    
    vector<long long> numbers;
    vector<char> operators;
    
    int index = 0;
    for (int i = 0; i < expression.size(); i++) {
        char c = expression[i];
        if (c == '*' || c == '+' || c == '-') {
            operators.push_back(c);
            numbers.push_back(stoi(expression.substr(index, i - index)));
            index = i + 1;
        } else if (i == expression.size() - 1) {
            numbers.push_back(stoi(expression.substr(index, i - index + 1)));
        }
    }
    
    vector<string> targets = { "*+-", "*-+", "+*-", "+-*", "-+*", "-*+" };
    for (int i = 0; i < targets.size(); i++) {
        answer = max(answer, calculate(numbers, operators, targets[i]));
    }
    
    return answer;
}

long long calculate(vector<long long> nums, vector<char> operators, string targets) {
    for (auto target : targets) {
         for (int i = 0; i < operators.size(); i++) {
            if (operators[i] == target) {
                if (target == '+')
                    nums[i] += nums[i + 1];
                else if (target == '*')
                    nums[i] *= nums[i + 1];
                else if (target == '-')
                    nums[i] -= nums[i + 1];

                nums.erase(nums.begin() + i + 1);
                operators.erase(operators.begin() + i);
                i --;
            }
        }   
    }
    
    return abs(nums[0]);
}