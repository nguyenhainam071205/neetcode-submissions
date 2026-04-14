class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length;
        const n2 = s2.length;
        if(n1 > n2) return false;

        let arr1 = new Array(26).fill(0);
        let arr2 = new Array(26).fill(0);

        for(let i = 0; i < n1; i++) {
            arr1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            arr2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        if(arr1.join('') === arr2.join('')) return true;

        for(let right = n1; right < n2; right++) {
            let left = right - n1;
            arr2[s2.charCodeAt(left) - 'a'.charCodeAt(0)]--;
            arr2[s2.charCodeAt(right) - 'a'.charCodeAt(0)]++

            if(arr1.join('') === arr2.join('')) return true;
        }

        return false;
    }
}
