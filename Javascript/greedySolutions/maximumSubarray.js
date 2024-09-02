/**
 * @param {number[]} nums
 * @return {number}'
 * 53
 * https://leetcode.com/problems/maximum-subarray/description/ */
var maxSubArray = function(nums) {
    if (nums.length === 0) return undefined // no array to check
    if (nums.length === 1) return nums[0]; // max has to be single value

    
    let total = 0; // 
    let newTotal = Number.NEGATIVE_INFINITY; // minimum possible value
    let right = 0;

    // traverse array 
    while (right < nums.length) {
        // reset initial total when we get a positive value
        // and our total is negative (indicating start of new possible max)
        if (total <= 0 && nums[right] > 0) {
            total = 0;
        }
        total += nums[right];
        // choose max from either:
        // current value (for neg only arrays)
        // current total
        // or current max
        newTotal = Math.max(nums[right], total, newTotal);
        right++;
    }
    return newTotal;
};