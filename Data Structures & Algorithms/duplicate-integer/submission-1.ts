class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let el = nums[i];
            if (map[el]) {
                return true
            } else {
                map[el] = 1;
            }
        }
        return false;
    }
}
