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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head: ListNode | null, val: number): ListNode {
        let dummy_node = new ListNode(0, head);
        let prev = dummy_node;
        let curr = head;

        while (curr) {
            let next_node = curr.next;
            if (curr.val === val) {
                prev.next = next_node;
            } else {
                prev = curr
            }
            curr = next_node
        }
        return dummy_node.next
    }
}
