/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 56
 * https://leetcode.com/problems/merge-intervals/description/ */
var merge = function(intervals) {

    // initial counter 
    let counter = 0;

    // sort our array O(nlogn)
    intervals.sort((a,b) => {
        return a[0] - b[0];
    })

    while (counter+1 < intervals.length) {

        // compare bounds - if the end of our current counter interval is greater than the start of the next
        if (intervals[counter][1] >= intervals[counter+1][0]) {

            // take the max and min of both bounds for both intervals
            intervals[counter][0] = Math.min(intervals[counter][0], intervals[counter+1][0]);
            intervals[counter][1] = Math.max(intervals[counter][1], intervals[counter+1][1]);

            // remove the compared interval from our array
            intervals.splice(counter+1, 1);
        } else {

            // otherwise, no merge, can safely increase counter
            counter++;
        }
    }
    return intervals;
};