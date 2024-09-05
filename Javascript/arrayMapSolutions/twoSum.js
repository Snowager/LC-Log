/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 1
 * https://leetcode.com/problems/two-sum/description/ */
var twoSum = function(nums, target) {
    // catch edge cases
    if (nums.length <= 1) return undefined;
    if (nums.length === 2) return [0,1];

    // init our arrayMap
    let numMap = new Map();
    let subArr = [];

    // return early when we find match for our array
    nums.some((num, index) => {
        if (numMap.has(num)) {
            subArr.push(...[numMap.get(num), index])
            return;
        }
        // save only possible value to create sum from other value
        numMap.set((target - num), index)
    })
    return subArr;
};