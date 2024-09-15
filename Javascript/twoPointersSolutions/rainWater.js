/**
 * @param {number[]} height
 * @return {number}
 * 11
 * https://leetcode.com/problems/container-with-most-water/description/ */
var maxArea = function(height) {
    // early returns for specific cases
    if (height.length === 1) return 0;
    if (height.length === 2) return Math.min(height[0], height[1]);

    // init our pointer positions
    let left = 0;
    let right = height.length-1;

    let area = 0;

    // while pointers haven't crossed, get the largest area using the minimum height for each location 
    // (minimum chosen because we need water to be contained)
    // we advance the pointer for the side that is shorter overall
    while (left < right) {
        area = Math.max(area, (right - left)*Math.min(height[left], height[right]));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return area;
};