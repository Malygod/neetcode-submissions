class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded_string = "";

        for (let i = 0; i < strs.length; i++) {
            encoded_string += strs[i].length + "#" + strs[i];
        }

        return encoded_string;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf("#", i);
            let length = parseInt(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return res;
    }
}
