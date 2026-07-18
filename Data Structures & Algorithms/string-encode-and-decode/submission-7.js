class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
		let encoded = ''
		for (const str of strs) {
			encoded += str.length + '#' + str
		}
		return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode = str => {
       const res = []
		let i = 0
		while (i < str.length) {
			let j = i
			// Move j to find the separator #
			while (str[j] !== '#') {
				j++
			}
			const length = parseInt(str.slice(i, j)) // length before '#'
			const word = str.slice(j + 1, j + 1 + length) // extract word
			res.push(word)
			i = j + 1 + length // move i to next encoded word
		}
		return res
    }
}
