/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 167
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/ */
var twoSum = function(numbers, target) {
    // handle edge case and early return for efficiency
    if (numbers.length <= 0) return undefined;
    if (numbers.length === 2) return [1,2];

    // create our pointers
    let left = 0;
    let right = numbers.length - 1;

    // because array is sorted we use the combined total to determine where to move which pointers
    while (numbers[left] + numbers[right] !== target) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else {
            left++;
        }
    }

    // problem specifies non zero indexed return positions
    return [left+1, right+1];
};