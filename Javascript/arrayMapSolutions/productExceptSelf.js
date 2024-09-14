/**
 * @param {number[]} nums
 * @return {number[]}
 * 238
 * https://leetcode.com/problems/product-of-array-except-self/ */
var productExceptSelf = function(nums) {
    const prefix = [];
    const postfix = [];
    let initialValue = 1;

    // create a prefix array to track values multiplied from left of array
    for (let x = 0; x < nums.length; x++) {
        initialValue *= nums[x];
        prefix.push(initialValue);
    }
    initialValue = 1;

    // create a postfix array to track values multiplied from right of array
    for (let x = nums.length - 1; x >= 0; x--) {
        initialValue *= nums[x];
        postfix.unshift(initialValue);
    }

    let arr = new Array(prefix.length).fill(1);

    // multiply existing n-1 prefix to n+1 postfix combinations
    // using array mapping
    return arr.map((val, index) => {
        if (prefix[index-1] !== undefined) {
            val *= prefix[index-1] 
        }
        if (postfix[index+1] !== undefined) {
            val *= postfix[index+1];
        }
        return val;
    });
};