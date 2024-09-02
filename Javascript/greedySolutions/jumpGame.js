/**
 * @param {number[]} nums
 * @return {boolean}
 * 55
 * https://leetcode.com/problems/jump-game/description/ */
var canJump = function(nums) {
    // length of 1 means we are already at finish
    if (nums.length === 1) return true;
    // track jumps with a maxValue
    let maxValue = nums[0];
    // use a pointer for traversal
    let ptr = 0;

    // while the pointer has not traversed array,
    // take the max of either our current max minus one for moving
    // or the current location
    while (ptr !== nums.length - 1) {
        // if we ever hit zero than there was no max that could get over the zero
        // and we return false
        if (maxValue <= 0) {
            return false
        }
        ptr++;
        maxValue = Math.max(maxValue - 1, nums[ptr]);
    }
    // return true for traversing array successfully
    return true;  
};