class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>();

        for (const word of strs) {
            const key = word.split("").sort().join("");

            const anagrams = group.get(key);

            if (anagrams !== undefined) {
                anagrams.push(word);
            } else {
                group.set(key, [word])
            }
        }

        return Array.from(group.values());
    }
}
