class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        s1 = s1.split('').sort().join('');

        const n = s2.length;
        for(let i = 0; i < n; i++) {
            let tempStr = s2.slice(i, i + s1.length).split('').sort().join('');
            if(tempStr === s1) return true;
        }

        return false;
    }
}
