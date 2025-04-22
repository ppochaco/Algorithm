#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
#include <set>

using namespace std;

void get_prime(vector<bool> &prime, int number);

int solution(string numbers) {
    int answer = 0;

    set<int> nums;
    int max_number = 0;
    sort(numbers.begin(), numbers.end());

    for (int r = 1; r <= numbers.size(); r++) {
        do {
            string temp = "";
            
            for (int i = 0; i < r; i++)
                temp += numbers[i];
            
            if (stoi(temp)) {
                nums.insert(stoi(temp));
                max_number = max(max_number, stoi(temp));
            }
            
            reverse(numbers.begin() + r, numbers.end());
        } while (next_permutation(numbers.begin(), numbers.end()));
    }
    
    vector<bool> is_prime(max_number + 1, true);
    get_prime(is_prime, max_number);
    for (auto num : nums)
        if (is_prime[num])
            answer ++;
    
    return answer;
}

void get_prime(vector<bool> &prime, int number) {
    prime[0] = false;
    prime[1] = false;
    
    for (int i = 2; i * i <= number; i++) {
        if (prime[i] == true) {
            int j = 2;
            while (i * j <= number) {
                prime[i * j] = false;
                j += 1;
            }
        }
    }
}
                 