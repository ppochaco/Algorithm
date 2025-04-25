#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

int n;
vector<pair<int, int>> classes;
priority_queue<int, vector<int>, greater<int>> end_time;

int main() {
  cin >> n;
  for (int i = 0; i < n; i++) {
    int a, b;
    cin >> a >> b;
    classes.push_back({ a, b });
  }
  sort(classes.begin(), classes.end());

  end_time.push(classes[0].second);
  for (int i = 1; i < classes.size(); i++) {
    if (end_time.top() <= classes[i].first) {
      end_time.pop();
    }
    end_time.push(classes[i].second);
  }

  cout << end_time.size();
  
  return 0;
}