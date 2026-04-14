class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;

        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => (b[0] - a[0]));

        let remainingTime = [];
        for(let i = 0; i < n; i++) {
            remainingTime.push((target - pair[i][0]) / pair[i][1]);
        }

        let stack = [];
        for(let i = 0; i < n; i++) {
            if(stack.length === 0 || remainingTime[i] > stack[stack.length - 1]) {
                stack.push(remainingTime[i]);
            }
        }

        return stack.length;
    }
}
