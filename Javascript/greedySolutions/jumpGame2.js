/**
 * @param {number[]} nums
 * @return {number}
 * 45
 * https://leetcode.com/problems/jump-game-ii/description/ */ 
var jump = function(nums) {
    // edge case catches
    if (nums.length === 0) return undefined;
    if (nums.length === 1) return 0;
    if (nums.length === 2) return 1;

    let l = 0, r = 0;
    let pos = 0;
    let jumps = 0;

    // while we haven't traversed array
    while (r < nums.length - 1) {
        // pos tracks max pos we can jump to from our location
        pos = 0;
        
        for (let x = l; x < r+1; x++) {
            // let our pos be the max pos from where we can jump next
            pos = Math.max(pos, nums[x]+x);
        }
        // by definition our next lower bound will be one to the right of current upper bound
        l = r + 1;
        // set our new upper bound to new max jump pos
        r = pos;
        // increase our jump counter as result
        jumps += 1;
    }
    return jumps;
};