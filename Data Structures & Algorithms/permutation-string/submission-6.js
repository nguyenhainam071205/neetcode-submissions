class Solution {
     
    checkInclusion(s1, s2) {
const n1 = s1.length;
    const n2 = s2.length;
    const charCodeA = 'a'.charCodeAt(0);

    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    for(let i = 0; i < n1; i++) {
        arr1[s1.charCodeAt(i) - charCodeA]++;
        arr2[s2.charCodeAt(i) - charCodeA]++;
    }

    if(arr1.join('') === arr2.join('')) return true;

    let l = 0;
    for(let r = n1; r < n2; r++) {
        arr2[s2.charCodeAt(l) - charCodeA]--;
        arr2[s2.charCodeAt(r) - charCodeA]++;
        if(arr1.join('') === arr2.join('')) return true;
        l++;
    }

    return false;
    }
}
