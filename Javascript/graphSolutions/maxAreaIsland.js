/**
 * @param {number[][]} grid
 * @return {number}
 * 695
 * https://leetcode.com/problems/max-area-of-island/ */
var maxAreaOfIsland = function(grid) {
    let max = 0;

    // store size in mutable array
    let size = [];
    size.push(0);

    // traverse multi-array and then traverse island when encountering a 1
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                getIslandCount([row, col]);
                // count is max of current count and new saved size
                max = Math.max(max, size[0])
                size[0] = 0;
            }
        }
    }

    // use cardinal bounds of island to increase size after determining that space is part of valid island
    // remove the 1 afterwards to prevent re-searching
    function getIslandCount([posx,posy]) { 
        grid[posx][posy] = 0;
        size[0]++;
        if (checkArrayIndex(posx, posy+1) && grid[posx][posy+1] === 1) getIslandCount([posx, posy+1]);
        if (checkArrayIndex(posx, posy-1) && grid[posx][posy-1] === 1) getIslandCount([posx, posy-1]);
        if (checkArrayIndex(posx+1, posy) && grid[posx+1][posy] === 1) getIslandCount([posx+1, posy]);
        if (checkArrayIndex(posx-1, posy) && grid[posx-1][posy] === 1) getIslandCount([posx-1, posy]);
    }

    // helper function to check array index for valid bounds
    function checkArrayIndex(x, y) {
    if (grid[x] && grid[x][y]) {
        return true;
    }
    return false;
}
    return max;
};