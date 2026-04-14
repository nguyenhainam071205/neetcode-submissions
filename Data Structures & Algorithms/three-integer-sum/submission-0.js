class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const set = new Set();
        const result = []
        for(let i = 0; i < n - 2; i++) {
            for(let j = i + 1; j < n - 1; j++) {
                for(let k = j + 1; k < n; k++) {
                    if(nums[i] + nums[j] + nums[k] === 0) {
                        const key = `${nums[i]},${nums[j]},${nums[k]}`;
                        if (!set.has(key)) {
                            result.push([nums[i], nums[j], nums[k]]);
                            set.add(key);
                        }
                    }
                }
            }
        }

        return result;
    }
}
