class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;
        for(let i = 0; i < n - 1; i++) {
            for(let j = i + 1; j < n; j++) {
                if(numbers[i] + numbers[j] === target) {
                    return [i + 1, j + 1];
                }
            }
        }
        return null;
    }
}
