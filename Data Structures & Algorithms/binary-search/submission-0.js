class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        let l = 0, r = n - 1;
        let pos = -1;
        while(l <= r){
            let m = Math.floor((l + r) / 2);
            if(nums[m] == target) return m;
            else if(nums[m] < target) l = m + 1;
            else r = m - 1;
        }
        return pos;
    }
}
