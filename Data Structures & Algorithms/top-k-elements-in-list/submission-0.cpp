class Solution {
    public:
        vector<int> topKFrequent(vector<int>& nums, int k) {
            unordered_map<int, int> freq;
            for(int num : nums){
                freq[num]++;
            }

            int n = nums.size();
            vector<vector<int>> buckets(n + 1);
            for(auto it : freq){
                int num = it.first;
                int freq = it.second;
                buckets[freq].push_back(num);
            }

            vector<int> ans;
            for(int i = buckets.size() - 1; i >= 0; i--){
                for(int num : buckets[i]){
                    if(ans.size() == k) break;
                    ans.push_back(num);
                }
            }

            return ans;
        }
};