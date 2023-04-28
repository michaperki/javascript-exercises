const palindromes = function (str) {
    let str1 = str.replace(/[^A-Za-z]/g, "").toLowerCase();
    let str2 = str1.split("").reverse().join("");
    return str1 === str2;
};

// Do not edit below this line
module.exports = palindromes;
