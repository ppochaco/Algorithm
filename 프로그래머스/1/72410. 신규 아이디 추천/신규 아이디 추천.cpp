#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

string solution(string new_id) {
    for (int i = 0; i < new_id.size(); i++) {
        char c = new_id[i];
        if ('A' <= c && c <= 'Z')
            new_id[i] = c - 'A' + 'a';
        else if ('a' <= c && c <= 'z')
            continue;
        else if ('0' <= c && c <= '9')
            continue;
        else if (c == '-' || c == '_' || c == '.')
            continue;
        else
            new_id[i] = ' ';
    }
    new_id.erase(remove(new_id.begin(), new_id.end(), ' '), new_id.end());
    
    char prev = ' ';
    for (int i = 0; i < new_id.size(); i++) {
        if (prev == '.' && new_id[i] == '.') {
            new_id[i - 1] = ' ';
        }
        prev = new_id[i];
    }
    new_id.erase(remove(new_id.begin(), new_id.end(), ' '), new_id.end());
    
    if (new_id[0] == '.')
        new_id[0] = ' ';
    if (new_id[new_id.size() - 1] == '.')
        new_id[new_id.size() - 1] = ' ';
    new_id.erase(remove(new_id.begin(), new_id.end(), ' '), new_id.end());
    
    if (new_id.size() == 0)
        new_id = 'a';
    
    if (new_id.size() >= 16)
        new_id.erase(15, new_id.size());
    
    if (new_id[new_id.size() - 1] == '.')
        new_id.pop_back();
    
    while (new_id.size() <= 2) {
        new_id.push_back(new_id[new_id.size() - 1]);
    }
    
    return new_id;
}