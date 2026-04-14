class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;

        let maxLen = 0;
        let maxFreq = 0;
        let l = 0;
        let map = new Map();

        for(let r = 0; r < n; r++) {
            let char = s[r];
            map.set(char, (map.get(char) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(char));
            if((r - l + 1) - maxFreq > k) {
                let leftChar = s[l];
                map.set(leftChar, map.get(leftChar) - 1);
                l++;
            }

            maxLen = Math.max(maxLen, (r - l + 1));
        }

        return maxLen;
    }
}
