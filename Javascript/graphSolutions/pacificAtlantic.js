/**
 * @param {number[][]} heights
 * @return {number[][]}
 * 417
 * https://leetcode.com/problems/pacific-atlantic-water-flow/description/ */
var pacificAtlantic = function(heights) {
    let pacific = {};
    let atlantic = {};
    let result = [];

    // for each square, check if it can properly trickle up for each ocean
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[row].length; col++) {

            // bounds for pacific bordering squares
            if (col === 0 || row === 0) {
                checkTrickleUp(row, col, heights, pacific);
            }
            
            // bounds for atlantic bordering squares
            if (col === heights[row].length - 1 || row === heights.length - 1) {
                checkTrickleUp(row, col, heights, atlantic);
            }
        }
    }

    // recursive function that travels a valid path through successive height values that are higher or the same
    function checkTrickleUp(row, col, grid, set) {
        if (set[[row,col].toString()] === true) {
            return;
        }

        // set location in hashmap for that specific ocean
        set[[row,col].toString()] = true;

        // go right if it exists and the height is higher or the same
        if (checkArrayIndex(row,col+1, grid) && grid[row][col+1] >= grid[row][col]) {
            checkTrickleUp(row, col+1, grid, set);
        }
        // go left if it exists and the height is higher or the same
        if (checkArrayIndex(row,col-1, grid) && grid[row][col-1] >= grid[row][col]) {
            checkTrickleUp(row, col-1, grid, set);
        }
        // go up if it exists and the height is higher or the same
        if (checkArrayIndex(row+1,col, grid) && grid[row+1][col] >= grid[row][col]) {
            checkTrickleUp(row+1, col, grid, set);
        }
        // go down if it exists and the height is higher or the same
        if (checkArrayIndex(row-1,col, grid) && grid[row-1][col] >= grid[row][col]) {
            checkTrickleUp(row-1, col, grid, set);
        }
    }

    // traverse array and push squares that exist within both ocean maps into a final results array 
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[row].length; col++) {
            if (pacific[[row,col].toString()] && atlantic[[row,col].toString()]) result.push([row,col])
        }
    }

    // helper function to check array index for valid bounds
    function checkArrayIndex(x, y, grid) {
        if (x >= 0 && x < grid.length && y >= 0 && y < grid[x].length) {
            return true;
        }
    }
    return result;
};