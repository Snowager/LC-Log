/**
 * @param {string} s
 * @return {boolean}
 * 125
 * https://leetcode.com/problems/valid-palindrome/description/ */
var isPalindrome = function(s) {
    // remove non alphanumeric characters using regex exp 
    let newS = s.replace(/[^0-9a-z]/gi, '').toLowerCase(); 

    // handle early return cases
    if (newS.length <= 1) return true;
    if (newS.length === 3 || newS.length === 2) return newS[0] === newS[newS.length-1];

    let left = 0;
    let right = newS.length - 1;

    // compare chars at both ends using pointers that move inward
    while (left <= right) {
        if (newS[left] !== newS[right]) {
            return false;
        }
        left++;
        right--;
    } 
    return true;
};