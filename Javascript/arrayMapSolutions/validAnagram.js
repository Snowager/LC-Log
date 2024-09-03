/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 242
 * https://leetcode.com/problems/valid-anagram/description/ */
var isAnagram = function(s, t) {
    // catch edge cases
    if (s.length !== t.length) return false;
    if (s === t) return true;

    // map for getting char frequencies
    let anagramMap = new Map();
    
    // store appearances of s chars in map
    for (let char of s) {
        if (!anagramMap.has(char)) {
            anagramMap.set(char, 1)
        } else {
            anagramMap.set(char, anagramMap.get(char) + 1);
        }
    }

    // remove appearances of t chars from map
    for (let char of t) {
        // if new char, can't be anagram
        if (!anagramMap.has(char)) {
            return false;
        } else {
            anagramMap.set(char, anagramMap.get(char) - 1);
        }
        // if negative, more appearances of that char than in s
        if (anagramMap.get(char) < 0) return false;
    }

    // return if the map has been fully emptied or not
    return !!anagramMap;
    
};