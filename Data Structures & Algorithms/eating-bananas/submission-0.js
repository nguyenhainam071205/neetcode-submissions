class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    check(num, piles, h) {
        let hourSpent = 0;
        for(let bananas of piles) {
            hourSpent += Math.ceil(bananas / num);
        }
        return hourSpent <= h;
    }

    minEatingSpeed(piles, h) {
        let ans = 0;
        let left = 1, right = Math.max(...piles);
        while(left <= right) {
            let mid = Math.round((left + right) / 2);
            if(this.check(mid, piles, h)) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }
}
