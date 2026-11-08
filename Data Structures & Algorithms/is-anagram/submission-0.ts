class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sorted_s = s.split("").sort().join("");
        let sorted_t = t.split("").sort().join("");
        if (sorted_s === sorted_t) {
            return true;
        } else {
            return false;
        }
    }
}
