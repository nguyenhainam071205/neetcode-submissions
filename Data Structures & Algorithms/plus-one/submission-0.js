class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let n = digits.length;
        for(let i = n - 1; i >= 0; i--){
            if(digits[i] + 1 != 10){
                digits[i] += 1;
                return digits;
            } else digits[i] = 0;
        }
        digits.unshift(1);
        return digits;
    }
}
