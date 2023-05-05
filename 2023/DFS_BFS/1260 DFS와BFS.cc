#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <cstring>
using namespace std;

int n, m, v;
vector<vector<int> > graph;
bool visited[1001];

void dfs(int x);
void bfs(int x);

int main() {
    ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);

    cin >> n >> m >> v;
    graph.resize(n+1);

    int tmp1, tmp2;
    for(int i = 0; i < m; i++) {
        cin >> tmp1 >> tmp2;
        graph[tmp1].push_back(tmp2);
        graph[tmp2].push_back(tmp1);
    }
    for(int i = 1; i <= n; i++) {
        sort(graph[i].begin(), graph[i].end());
    }

    dfs(v);
    cout << '\n';

    memset(visited, false, sizeof(visited));
    bfs(v);
    
    return 0;
}

void dfs(int x) {
    visited[x] = true;
    cout << x << ' ';

    for(int i = 0; i < graph[x].size(); i++) {
        int y = graph[x][i];
        if(!visited[y])
            dfs(y);
    }
}

void bfs(int start) {
    queue<int> q;
    q.push(start);
    visited[start] = true;

    while(!q.empty()) {
        int x = q.front();
        q.pop();
        cout << x << ' ';

        for(int i = 0; i < graph[x].size(); i++) {
            int y = graph[x][i];
            if(!visited[y]) {
                q.push(y);
                visited[y] = true;
            }
        }
    }
}