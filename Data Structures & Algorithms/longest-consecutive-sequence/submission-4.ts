class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length < 2) return nums.length;
    
        let longest: number = 1;
        let consecutives: number[] = [];

        const sorted: number[] = nums.sort((a, b) => a - b);

        consecutives.push(sorted[0]);
        for (let i = 0; i < nums.length - 1; i++) {
            if (sorted[i + 1] - sorted[i] === 0) continue;
            if (sorted[i + 1] - sorted[i] === 1) {
                consecutives.push(sorted[i + 1]);
                if (consecutives.length > longest) longest = consecutives.length;
            } else {
                consecutives = [sorted[i + 1]];
            }
        }

        return longest;
    }
}
