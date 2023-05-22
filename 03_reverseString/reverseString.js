const reverseString = function(string) {
    let splitString = string.split("");
    let reverseSplit = splitString.reverse();
    let reverseArray = reverseSplit.join("");
    return reverseArray;
};

console.log(reverseString('hello there'))
// Do not edit below this line
module.exports = reverseString;
