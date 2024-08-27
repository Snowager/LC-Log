
/* Params: strArr: String[]
   Return: groupAnagramArr: String[][]
   49
   https://leetcode.com/problems/group-anagrams/description/ */
function groupAnagram(strArr) {
    let groupAnagramArr = [];
    let anagramMap = new Map();
    for (let str of strArr) {
      let sortedString = str.split("").sort().join("");
      if (!anagramMap.has(sortedString)) {
          anagramMap.set(sortedString, [str]);
      } else {
        let tempArr = anagramMap.get(sortedString);
        anagramMap.set(sortedString, [...tempArr, str]);
      }
    }
    for (let key of anagramMap.keys()) {
        groupAnagramArr.push(anagramMap.get(key));
    }
    return groupAnagramArr;
}