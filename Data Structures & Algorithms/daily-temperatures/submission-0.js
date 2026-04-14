class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let ans = [];
        let stack = [];

        for(let i = 0; i < n; i++) {
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                ans[stack[stack.length - 1]] = i - stack[stack.length - 1];
                stack.pop();
            }
            stack.push(i);
        }

        while(stack.length > 0) {
            ans[stack[stack.length - 1]] = 0;
            stack.pop();
        }

        return ans;
    }
}
