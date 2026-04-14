class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length;
        let l = 0;
        let result = 0;
        let set = new Set();

        for(let r = 0; r < n; r++) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            result = Math.max(result, r - l + 1);
        }
        return result;
    }
}
