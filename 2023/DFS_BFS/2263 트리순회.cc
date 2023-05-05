#include <iostream>
#include <vector>
using namespace std;

int n;
vector<int> inorder, postorder, inorderIndex;

void search_postorder(int postStart, int inStart, int size);

int main() {
    ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
    
    cin >> n;

    inorder.resize(n);
    inorderIndex.resize(n+1);
    for(int i = 0; i < n; i++) {
        cin >> inorder[i];
        inorderIndex[inorder[i]] = i;
    }
    postorder.resize(n);
    for(int i = 0; i < n; i++) {
        cin >> postorder[i];
    }

    search_postorder(0,0,n);

    return 0;
}

void search_postorder(int postStart, int inStart, int size) {
    if(size == 0) {
        return;
    }

    int postEnd = postStart + size - 1;
    int node = postorder[postEnd];
    cout << node << ' ';

    int leftSize = inorderIndex[node] - inStart;
    search_postorder(postStart, inStart, leftSize);

    int rightSize = size - leftSize - 1;
    postStart += leftSize;
    inStart += leftSize + 1;
    search_postorder(postStart, inStart, rightSize);
}