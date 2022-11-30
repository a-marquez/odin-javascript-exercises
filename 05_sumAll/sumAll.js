const sumAll = function(a, b) {
    if (
        (a < 0 || b <0)
        || (typeof a != 'number' || typeof b != 'number')
    ) {
        return 'ERROR'
    }
    let largerNum = Math.max(a, b)
    let smallerNum = Math.min(a, b)
    let currentNumber = smallerNum
    let result = 0
    while (currentNumber != largerNum + 1) {
        result += currentNumber
        currentNumber ++
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
