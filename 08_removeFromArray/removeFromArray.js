const removeFromArray = function(arr, ...args) {
    let result = [];
    for (let item of arr) {
        if (!args.includes(item)) {
            result.push(item);
        }
    }
    return result;
};
console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;
