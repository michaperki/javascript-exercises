const removeFromArray = function(arr) {
    let newArr = []; 
    for (let i = 0; i < arr.length; i++) {
        if (!Array.from(arguments).includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
