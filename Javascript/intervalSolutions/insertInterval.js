/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 57
 * https://leetcode.com/problems/insert-interval/description/ */
var insert = function(intervals, newInterval) {

    // Array to hold solution
    let res = [];

    // loop through interval set 
    for (let x = 0; x < intervals.length; x++) {

        // first if/else if statements handle non merge cases for our newInterval's left and right bounds

        // if our right bound is less than the next interval, push the new interval
        // and the rest of the intervals left
        if (newInterval[1] < intervals[x][0]) {
            res.push(newInterval);
            return [...res, ...intervals.slice(x)];
        }
        // if our left bound is greater than the right bound of next interval
        // push next interval to our results
        else if (newInterval[0] > intervals[x][1]) {
            res.push(intervals[x]);

        // else we have a merge case; take min and max of both evaluated bounds
        } else {
            newInterval = [Math.min(newInterval[0], intervals[x][0]), Math.max(newInterval[1], intervals[x][1])]
        }
    }

    // making it here means our right bound is greater than the last interval in array
    // push newInterval to the end of our results
    res.push(newInterval)
    return res;
};