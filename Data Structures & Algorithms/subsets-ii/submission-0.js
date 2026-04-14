class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        
        // 1. Sort the array to ensure duplicates are adjacent
        nums.sort((a, b) => a - b);

        const backtrack = (start, tempPath) => {
            // Add a copy of the current subset to the result
            res.push([...tempPath]);

            for (let i = start; i < nums.length; i++) {
                // 2. Skip duplicates: 
                // If the current element is the same as the previous one
                // AND it's not the first element we're considering at this level
                if (i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                // Standard Backtracking: Choose, Explore, Un-choose
                tempPath.push(nums[i]);
                backtrack(i + 1, tempPath);
                tempPath.pop();
            }
        };

        backtrack(0, []);
        return res;
    }
}