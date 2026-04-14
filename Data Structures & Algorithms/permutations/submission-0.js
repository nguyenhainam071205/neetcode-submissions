class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
    const used = new Set();
    const backtracking = (temp) => {
        if(temp.length === nums.length) {
        res.push([...temp]);
        return;
        }
        for(let i = 0; i < nums.length; i++) {
        if(used.has(nums[i])) continue;
        temp.push(nums[i]);
        used.add(nums[i])
        backtracking(temp);
        used.delete(nums[i]);
        temp.pop();
        }
    }
    backtracking([]);
    return res;
    }
}
