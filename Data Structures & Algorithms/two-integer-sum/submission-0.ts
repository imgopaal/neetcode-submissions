class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let el = nums[i];
            let diff = target - el;
            if (diff in map) {
                return [map[diff], i];
            }
            map[el] = i
        }
        return []
    }
}
