class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        let longestStreak = 0;
        let len = 1;
        const set = new Set(nums);
        for(let num of set) {
            if(!set.has(num - 1)){
               let currentStreak = 1;
               let currentNum = num;
               while(set.has(currentNum + 1)) {
                   currentStreak++;
                   currentNum = currentNum + 1;
               }
               longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }
}
