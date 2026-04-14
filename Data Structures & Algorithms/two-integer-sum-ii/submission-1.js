class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;

        for(let i = 0; i < n; i++) {
            let l = i + 1;
            let r = n - 1;
            let newTarget = target - numbers[i];

            while(l <= r) {
                let m = Math.floor((l + r) / 2) ;
                console.log(l, r, m);
                if(numbers[m] === newTarget) return [i + 1, m + 1];
                if(numbers[m] > newTarget) --r;
                else ++l;
            }
        }

        return []
    }
}
