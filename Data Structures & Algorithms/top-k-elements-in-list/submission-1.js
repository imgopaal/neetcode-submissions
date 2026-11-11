class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let el = nums[i];
            if (el in map) {
                map[el]++;
            } else {
                map[el] = 1;
            }
        }
        let sorted_keys = Object.entries(map)
            .sort((a, b) => b[1] - a[1])
            .map((entry) => entry[0]);
        return sorted_keys.map(Number).slice(0, k);
    }
}
