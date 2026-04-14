/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head) return null;

  let N = 0;
  let cur1  = head;
  while(cur1) {
    N += 1;
    cur1 = cur1.next
  }

  if (n === N) {
    return head.next;
  }

  let cur2= head;
  for (let i = 1; i < N - n; i++) {
    if (cur2) cur2 = cur2.next;
  }

  if(cur2 && cur2.next) {
    cur2.next = cur2.next.next;
  }

  return head;
    }
}
