class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for(let s of strs){
            encodedStr += s.length + "#" + s;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let ans = []
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            ans.push(str.substring(i, j));
            i = j;
        }
        return ans;
    }
}
