/**
 * @param {string[]} strs
 * @return {string[][]}
 * 49
 * https://leetcode.com/problems/group-anagrams/description/ */
var groupAnagrams = function(strArr) {
    let groupAnagramArr = [];
    let anagramMap = new Map();
    // for each string, save sorted form as map key
    for (let str of strArr) {
      let sortedString = str.split("").sort().join("");
      if (!anagramMap.has(sortedString)) {
          anagramMap.set(sortedString, [str]);
      } else {
        let tempArr = anagramMap.get(sortedString);
        // push matching strings to saved array
        anagramMap.set(sortedString, [...tempArr, str]);
      }
    }
    for (let key of anagramMap.keys()) {
        // push all key/value arrays to final result array
        groupAnagramArr.push(anagramMap.get(key));
    }
    return groupAnagramArr;
}

