class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const len = s.length;
    let l = 0;
    let maxLength = 0;
    let maxFreq = 0;
    let map = new Map();

    for(let r = 0; r < len; r++) {
        let char = s[r];
        map.set(char, (map.get(char) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(char));
        let currentLength = r - l + 1;

        if(currentLength - maxFreq > k) {
            let leftChar = s[l];
            map.set(leftChar, map.get(leftChar) - 1);
            l++;
        }

        maxLength = Math.max(maxLength, r - l + 1);
    }
    return maxLength;
    }
}
