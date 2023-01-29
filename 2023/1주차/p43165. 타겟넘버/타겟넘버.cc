#include <string>
#include <vector>
using namespace std;

int answer;

void get_num(vector<int> numbers, int target, int sum, int i) {
    if(i == numbers.size()) {
        if(sum == target) {
            answer++;
        }
        return;
    }
    get_num(numbers, target, sum + numbers[i], i + 1);
    get_num(numbers, target, sum - numbers[i], i + 1);
}

int solution(vector<int> numbers, int target) {
    get_num(numbers, target, 0, 0);
    return answer;
}