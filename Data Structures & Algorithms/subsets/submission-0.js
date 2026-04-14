class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
  const backtracking = (start, temp) => {
    res.push([...temp]);
    for(let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      backtracking(i + 1, temp);
      temp.pop();
    }
  }
  backtracking(0, []);
  return res;
    }
}
