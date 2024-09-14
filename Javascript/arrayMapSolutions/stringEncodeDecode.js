
/**
 * @param {string[]} strs
 * @returns {string}
 * 271
 * https://leetcode.com/problems/encode-and-decode-strings/description/ */
function encode(strs) {

    //handle edge case
    if (strs.length == 0) return "";
    let encodeStr = "";

    // use "{length}#{string} format for encoding purposes"
    for (let x = 0; x < strs.length; x++) {
        strs[x] = strs[x].length + "#" + strs[x];
    }
    encodeStr = strs.join("");
    return encodeStr;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {

    // handle edge case
    if (str === "") return [];
    let pointer = 0;
    let decodeArr = [];
    let length = -1;
    while (pointer < str.length) {
        // capture tokens for length of string when we have valid length
        // push a new string of tokens that are length total to array after
        if (length >= 0) {
            let newStr = "";
            while (length > 0) {
                newStr += str[pointer];
                pointer++;
                length--;
            }
            decodeArr.push(newStr);
            length = -1;
        }
        // useParse int to build traversal length for tokens
        if (parseInt(str[pointer]) >= 0) {
            length = parseInt(str[pointer]);
            pointer++;
            while(str[pointer] !== "#" && pointer < str.length) {
                length *= 10;
                length += parseInt(str[pointer]);
                pointer++;
            }
        }
        // advance past limiting token #
        pointer++;
    }

    // if length left, means empty string remaining
    if (length >= 0) {
        decodeArr.push("");
        length = -1;
    }

    // return decoded array
    return decodeArr;
}