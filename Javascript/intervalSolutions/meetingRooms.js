/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 * 
 * intervals are sorted in ascending order
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     * 920
     * https://leetcode.com/problems/meeting-rooms/description/ */
    canAttendMeetings(intervals) {

        // initial counter 
        let counter = 0;

        for (let x = 1; x < intervals.length; x++) {

            // compare bounds - if the end of our meeting comparison is greater than the start
            // and the start is less than the end, they overlap
            if (intervals[counter].end > intervals[x].start && intervals[counter].start < intervals[x].end) {
                return false;
            }
            counter++;
        }
        return true;
    }
}