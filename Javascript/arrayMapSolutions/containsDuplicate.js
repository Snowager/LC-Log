/**
 * @param {number[]} nums
 * @return {boolean}
 * 217
 * https://leetcode.com/problems/contains-duplicate/description/ */
var containsDuplicate = function(nums) {
    // catch edge cases
    if (!nums) return undefined;
    if (nums.length === 1) return false;

    let numSet = new Set();

    // for each num, check if we added to set or not
    for (let num of nums) {
        // if already added, must be duplicate
        if (numSet.has(num)) return true;
        numSet.add(num);
    }
    return false;
};