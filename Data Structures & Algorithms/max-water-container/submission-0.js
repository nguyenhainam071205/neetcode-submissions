class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let ans = -1e9;
        let l = 0, r = height.length - 1;
        while(l < r) {
            let minHeight = Math.min(height[l], height[r]);
            let width = r - l;
            let area = minHeight * width;

            ans = Math.max(ans, area);

            if(height[l] < height[r]) ++l;
            else --r;
        }

        return ans;
    }
}
