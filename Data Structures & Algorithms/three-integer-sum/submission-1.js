class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const res = [];
        for(let i = 0; i < n - 2; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1, r = n - 1;
            while(l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                if(sum < 0) ++l;
                else if(sum > 0) --r;
                else {
                    res.push([nums[i], nums[l], nums[r]]);
                    while(l < r && nums[r] === nums[r - 1]) --r;
                    while(l < r && nums[l] === nums[l + 1]) ++l;
                    ++l; --r;
                }
            }
        }

        return res;
    }
}
