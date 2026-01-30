const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        return 'Error';
    }

    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let total = 0;

    for (let i = start; i <= end; i++) {
    total += i;
    }

    return total;

};
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
