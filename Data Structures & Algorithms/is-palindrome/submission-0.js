class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         const tmp1 = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        const tmp2 = tmp1.split('').reverse().join('');
        return tmp1 === tmp2;
    }
}
