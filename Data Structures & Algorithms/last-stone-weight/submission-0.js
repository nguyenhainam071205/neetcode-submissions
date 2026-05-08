class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();

        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 0) {
            if (maxHeap.size() === 1) return maxHeap.dequeue();

            const y = maxHeap.dequeue();
            const x = maxHeap.dequeue();

            if (y - x !== 0) {
                maxHeap.enqueue(y - x); 
            }
        }

        return 0;
    }
}
