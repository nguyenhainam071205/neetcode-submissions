class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let arr = [];
        arr.push(1);
        arr.push(2);

        for(let i = 2; i < n; i++){
            let step = arr[i-1] + arr[i-2];
            arr.push(step);
        }

        return arr[n - 1];
    }
}
