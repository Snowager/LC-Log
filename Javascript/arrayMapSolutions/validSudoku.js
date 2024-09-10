/**
 * @param {character[][]} board
 * @return {boolean}
 * 36
 * https://leetcode.com/problems/valid-sudoku/submissions/1164765088/ */
var isValidSudoku = function(board) { 
    // initialize our 3 char[][] arrays for comparing 
    let rows = [];
    let columns = [];
    let boxes = []; 

    for (let i = 0; i < 9; i++) {

        // 9 char[][] array for rows
        rows.push([]);

        // 9 char[][] array for columns
        columns.push([]);

        // 9 char[][] array for subBoxes
        boxes.push([]);
    }

    for (let i = 0; i < board.length; i++) { 
        for (let j = 0; j < board.length; j++) {

            let cell = board[i][j];

            // compare only existing clues
            if(cell !== ".") {

                // compare rows
                if (rows[i].includes(cell)) {
                return false
                } else rows[i].push(cell);

                // compare columns
                if (columns[j].includes(cell)) {
                return false;
                } else columns[j].push(cell);

                // get subIndex by normalizing 9x9 grid into 3x3 containers
                let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

                // compare subindex
                if (boxes[boxIndex].includes(cell)) {
                return false;
                } else boxes[boxIndex].push(cell);
            }
    }
  } 
  return true;
};