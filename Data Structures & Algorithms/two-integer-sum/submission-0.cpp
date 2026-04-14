class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> tmp = nums;
        sort(tmp.begin(), tmp.end());
        int n = tmp.size();
        int i = 0, j = n - 1;

        while(tmp[i] + tmp[j] != target){
            int sum = tmp[i] + tmp[j];
            if(sum > target) j--;
            else if(sum < target) i++;
        }

        int num1 = tmp[i];
        int num2 = tmp[j];

        vector<int> ans;
        for(int i = 0; i < n; i++){
            if(nums[i] == num1 || nums[i] == num2){
                ans.push_back(i);
                if(ans.size() == 2) break;
            }
        }

        return ans;
    }
};