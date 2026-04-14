class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    maxRight = function (height) {
        const n = height.length;
        const maxR = new Array(n);
        maxR[n - 1] = 0;

        for(let i = n - 2; i >= 0; i--) {
            maxR[i] = Math.max(height[i + 1], maxR[i + 1])
        }

        return maxR;
    }

    maxLeft = function (height) {
        const n = height.length;
        const maxL = new Array(n);
        maxL[0] = 0;

        for(let i = 1; i < n; i++) {
            maxL[i] = Math.max(height[i - 1], maxL[i - 1]);
        }

        return maxL;
    }
    trap(height) {
        const n = height.length;
        if (n < 3) {
            return 0;
        }

        const maxL = this.maxLeft(height);
        const maxR = this.maxRight(height);

        let totalWater = 0;
        for(let i = 0; i < n; i++) {
            const waterLevel = Math.min(maxR[i], maxL[i]);
            const trappedWater = waterLevel - height[i];
            if(trappedWater < 0) continue;
            totalWater += trappedWater;
        }

        return totalWater;
    }
}
