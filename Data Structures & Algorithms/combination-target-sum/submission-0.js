class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
  const backtracking = (start, temp, sum) => {
    if(sum === target) res.push([...temp]);
    if(sum > target) return;
    for(let i = start; i < nums.length; i++) {
      // @ts-ignore
      temp.push(nums[i]);
      // @ts-ignore
      backtracking(i, temp, sum + nums[i]);
      temp.pop();
    }
  }
  backtracking(0, [], 0);
  return res;
    }
}
