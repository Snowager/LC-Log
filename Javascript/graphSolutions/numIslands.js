/**
 * @param {character[][]} grid
 * @return {number}
 * 200
 * https://leetcode.com/problems/number-of-islands/ */
var numIslands = function(grid) {
    let count = 0;

    // traverse multi-array and start search when encountering island
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1") {
                getIslandCount([row, col]);
                // increase count after function calls are fully popped from stack.
                count++;
            }
        }
    }

    // remove location of 1 to prevent re-searching, and expand outward to areas within bounds in cardinal graph directions.
    function getIslandCount([posx,posy]) { 
        grid[posx][posy] = "0";
        if (checkArrayIndex(posx, posy+1) && grid[posx][posy+1] === "1") getIslandCount([posx, posy+1]);
        if (checkArrayIndex(posx, posy-1) && grid[posx][posy-1] === "1") getIslandCount([posx, posy-1]);
        if (checkArrayIndex(posx+1, posy) && grid[posx+1][posy] === "1") getIslandCount([posx+1, posy]);
        if (checkArrayIndex(posx-1, posy) && grid[posx-1][posy] === "1") getIslandCount([posx-1, posy]);
    }

    // helper function for determining bounds of multi-array
    function checkArrayIndex(x, y) {
    if (grid[x] && grid[x][y]) {
        return true;
    }
    return false;
}

    // return final count
    return count;
};