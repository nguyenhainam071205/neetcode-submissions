class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        let map = new Map();

        for(let i = 0; i < n; i++) {
            map.set(numbers[i], i);
        }

        for(let i = 0; i < n; i++){
            let tempTarget = target - numbers[i];
            if(map.has(tempTarget)){
                return [i + 1, map.get(tempTarget) + 1];
            }
        }
        
        return [];
    }
}
