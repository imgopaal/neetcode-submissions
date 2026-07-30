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
     * @return {boolean}
     */
    isPalindrome(head: ListNode | null): boolean {
        // lets first find the mid of the list
        // slow & fast pointers

        // find middle (slow)
        let slow = head; // this
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // now lets reverse the second half of the list
        let prev = null;
        while (slow) {
            let next_node = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next_node;
        }

        let left = head; // first node
        let right = prev; // first node of second half

        while (right) {
            if (left.val !== right.val) {
                return false;
            } else {
                left = left.next;
                right = right.next;
            }
        }
        return true;
    }
}
