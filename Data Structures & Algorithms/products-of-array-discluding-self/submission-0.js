class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let product = 1;
        let zeroCount = 0;
        for(let num of nums){
            if(num === 0) zeroCount++;
            else product *= num;
        }

        let ans = new Array(n).fill(0);

        if(zeroCount > 1) return ans;

        for(let i = 0; i < n; i++) {
            if(zeroCount > 0) {
                ans[i] = (nums[i] === 0 ? product : 0);
            } else {
                ans[i] = product / nums[i];
            }
        }

        return ans;
    }
}
