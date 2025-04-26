#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

vector<pair<int, int>> find_friend(vector<vector<int>> seat, vector<int> friends);
pair<int, int> find_space(vector<vector<int>> seat, vector<pair<int, int>> candidate);
int get_friends_num(vector<vector<int>> seat, pair<int,int> cur_seat, vector<int> friends);

int n;
vector<int> dx = { 0, 1, 0, -1};
vector<int> dy = { 1, 0, -1, 0};

int main() {
  cin >> n;
  vector<vector<int>> seat(n, vector<int> (n, 0));
  vector<vector<int>> friends(n*n + 1, vector<int> (4));

  for (int i = 0; i < n * n; i++) {
    int cur_num, a, b, c, d;
    cin >> cur_num >> a >> b >> c >> d;
    vector<pair<int, int>> candidate = find_friend(seat, {a, b, c, d});
    friends[cur_num] = { a, b, c, d };
    
    pair<int, int> cur_seat;
    if (candidate.size() > 1) {
      cur_seat = find_space(seat, candidate);
    } else {
      cur_seat = candidate[0];
    }

    seat[cur_seat.first][cur_seat.second] = cur_num;
  }

  int answer = 0;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      int friends_num;
      friends_num = get_friends_num(seat, { i, j }, friends[seat[i][j]]);

      if (friends_num == 0) continue;
      answer += pow(10, friends_num - 1);
    }
  }

  cout << answer;
  
  return 0;
}

vector<pair<int, int>> find_friend(vector<vector<int>> seat, vector<int> cur_friends) {
  vector<vector<int>> friend_cnt(n, vector<int> (n, 0));
  int max_cnt = 0;

  for (auto friend_num : cur_friends) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        if (seat[i][j] == friend_num) {
          for (int k = 0; k < 4; k++) {
              int x = dx[k] + i;
              int y = dy[k] + j;
  
              if (x < 0 || y < 0 || x >= n || y >= n) continue;
  
              if (seat[x][y] != 0) continue;
  
              friend_cnt[x][y]++;
              max_cnt = max(max_cnt, friend_cnt[x][y]);
          }
        }
      }
    }
  }

  vector<pair<int, int>> candidate;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (max_cnt == friend_cnt[i][j] && seat[i][j] == 0)
        candidate.push_back(make_pair(i, j));
    }
  }

  return candidate;
}

pair<int, int> find_space(vector<vector<int>> seat, vector<pair<int, int>> candidate) {
  vector<vector<int>> space_cnt(n, vector<int> (n, 0));
  int max_cnt = 0;

  for (auto cur_seat : candidate) {
    int i = cur_seat.first;
    int j = cur_seat.second;

    for (int k = 0; k < 4; k++) {
      int x = dx[k] + i;
      int y = dy[k] + j;

      if (x < 0 || y < 0 || x >= n || y >= n) continue;

      if (seat[x][y] == 0) {
        space_cnt[i][j]++;
        max_cnt = max(max_cnt, space_cnt[i][j]);
      }
    }
  }

  if (max_cnt == 0) {
    return { candidate[0].first, candidate[0].second };
  }

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (max_cnt == space_cnt[i][j]) {
        return { i, j };
      }
    }
  }

  return { -1, -1 };
}

int get_friends_num(vector<vector<int>> seat, pair<int,int> cur_seat, vector<int> cur_friends) {
  int cnt = 0;

  for (int k = 0; k < 4; k++) {
    int x = dx[k] + cur_seat.first;
    int y = dy[k] + cur_seat.second;

    if (x < 0 || y < 0 || x >= n || y >= n) continue;
    for (auto friend_num : cur_friends) {
      if (seat[x][y] == friend_num) {
        cnt++;
        break;
      }
    }
  }

  return cnt;
}