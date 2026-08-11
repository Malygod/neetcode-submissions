class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];

            const find = seen.get(compliment);

            if (find !== undefined) {
                return [find, i]
            }

            seen.set(nums[i], i);
        }

        return []
    }
}
