#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <cstring>

using namespace std;

string solution(string new_id) {
    
    string temp;
    for (char& c : new_id) {
        if ('A' <= c && c <= 'Z')
            temp += c - 'A' + 'a';
        else if (
            'a' <= c && c <= 'z' ||
            '0' <= c && c <= '9' ||
            strchr("-_.", c)
        )
            temp += c;
    }
    new_id = temp;
    
    temp.clear();
    for (char& c : new_id) {
        if (!temp.empty() && temp.back() == '.' && c == '.')
            continue;
        temp += c;
    }
    new_id = temp;
    
    if (new_id.front() == '.')
        new_id.erase(new_id.begin());
    if (new_id.back() == '.')
        new_id.pop_back();
    
    if (new_id.empty())
        new_id = 'a';
    
    if (new_id.size() >= 16)
        new_id = new_id.substr(0, 15);
    if (new_id.back() == '.')
        new_id.pop_back();
    
    while (new_id.size() <= 2) {
        new_id += new_id.back();
    }
    
    return new_id;
}