class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    minRight = (heights) => {
        const n = heights.length;
        let right  = [];
        let stack = [];

        for(let i = 0; i < n; i++) {
            while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                right[stack[stack.length - 1]] = i;
                stack.pop();
            }
            stack.push(i);
        }

        while(stack.length) {
            right[stack[stack.length - 1]] = n;
            stack.pop();
        }

        return right;
    }

    minLeft = (heights) => {
        const n = heights.length;
        let left  = [];
        let stack = [];

        for(let i = n - 1; i >= 0; i--) {
            while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                left[stack[stack.length - 1]] = i;
                stack.pop();
            }
            stack.push(i);
        }

        while(stack.length) {
            left[stack[stack.length - 1]] = -1;
            stack.pop();
        }

        return left;
    }

    largestRectangleArea(heights) {
        const n = heights.length;
        if (n === 0) return 0;

        let left = this.minLeft(heights);
        let right = this.minRight(heights);
        let maxArea = 0;

        for(let i = 0; i < n; i++) {
            let width = right[i] - left[i] - 1;
            let area = heights[i] * width;
            maxArea = Math.max(maxArea, area);
        }

        return maxArea;
    }
}
