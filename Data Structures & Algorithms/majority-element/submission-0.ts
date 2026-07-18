class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let sorted_nums = nums.sort((a, b) => a - b);
        return sorted_nums[Math.floor(sorted_nums.length / 2)];
    }
}
