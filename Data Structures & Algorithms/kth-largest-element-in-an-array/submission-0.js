

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const queue = new MinPriorityQueue();
        for(let i = 0; i < k; i++) {
            queue.enqueue(nums[i]);
        }

        const n = nums.length;
        for(let i = k; i < n; i++) {
            const topElement = queue.front();
            if(nums[i] > topElement) {
            queue.dequeue();
            queue.enqueue(nums[i]);
            }
        }

        return queue.front();
    }
}
