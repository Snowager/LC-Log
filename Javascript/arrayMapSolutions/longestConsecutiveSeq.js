/**
 * @param {number[]} nums
 * @return {number}
 * 128
 * https://leetcode.com/problems/longest-consecutive-sequence/description/ */
var longestConsecutive = function(nums) {
    // handle edge case
    if(nums.length === 0) return 0;

    // init set for tracking unique values
    let set = new Set(nums);
    let counter = 1;

    // for each value, if the previous number in numeric order doesn't exist 
    // we start tracking new sequence
    set.forEach((value)=>{
        if(!set.has(value -1 )){
        let number = 1;
        let newValue = value + 1;
        while(set.has(newValue)){
            number++;
            newValue++;
        }
        // counter is the max of sequence encountered so far
        counter = Math.max(counter, number)
    }
    })
     return counter;
};