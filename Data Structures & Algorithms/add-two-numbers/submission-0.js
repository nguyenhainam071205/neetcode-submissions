class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @param {number} carry
   * @return {ListNode}
   */
  add = (l1, l2, carry) => {
    // Điều kiện dừng: Khi cả 2 danh sách đều hết VÀ không còn số dư
    if (!l1 && !l2 && carry === 0) return null;

    // Lấy giá trị từ node hiện tại, nếu node là null thì mặc định là 0
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;

    const sum = num1 + num2 + carry;
    const val = Math.floor(sum % 10);
    const newCarry = Math.floor(sum / 10);

    // QUAN TRỌNG: Phải dùng this.add để gọi đệ quy trong Class
    const nextNode = this.add(l1?.next || null, l2?.next || null, newCarry);

    // Trả về node mới
    return new ListNode(val, nextNode);
  };

  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers = (l1, l2) => {
    return this.add(l1, l2, 0);
  };
}