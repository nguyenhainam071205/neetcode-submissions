class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap = function(height) {
        const n = height.length;
        let l = 0, r = n - 1;
        let maxLeft = 0, maxRight = 0;
        let totalWater = 0;
        while(l < r) {
            if(height[l] > maxLeft) {
                maxLeft = height[l];
            }
            if(height[r] > maxRight) {
                maxRight = height[r];
            }
            if(maxLeft < maxRight) {
                totalWater += maxLeft - height[l];
                l++;
            } else {
                totalWater += maxRight - height[r];
                r--;
            }
        }

        return totalWater
    }
}
