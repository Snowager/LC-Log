/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 347
 * https://leetcode.com/problems/top-k-frequent-elements/description/ */
var topKFrequent = function(nums, k) {
    const numMap = new Map();

    // map nums to {key:num, val:frequency}
    for (let num of nums) {
        if (!numMap.has(num)) {
            numMap.set(num, 1);
        } else {
            numMap.set(num, numMap.get(num) + 1);
        }
    }

    // array for storage
    const topArr = [];

    for (let key of numMap.keys()) {
        topArr.push({freq:numMap.get(key), num:key});
    }

    // sort array based on reverse frequency
    topArr.sort((a,b) => b.freq - a.freq);

    // return new array sliced to k using destructured mapping
    return topArr.slice(0, k).map(({num}) => num);
};