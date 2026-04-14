class Solution {
    public:
        bool isAnagram(string s, string t) {
            unordered_map<char, int> count;
            for(char c : s){
                count[c - 'a']++;
            }
            for(char c : t){
                count[c - 'a']--;
            }

            for(auto it = count.begin(); it != count.end(); it++){
                if(it->second != 0) return false;
            }
            return true;
        }
};