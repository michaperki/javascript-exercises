const reverseString = function(str) {
    let arr = str.split("");
    let revArr = [];
    for (let i = 0; i < arr.length; i++) {
        revArr.unshift(arr[i]);
    }
    return revArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
