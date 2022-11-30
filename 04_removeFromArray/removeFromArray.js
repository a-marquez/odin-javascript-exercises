const removeFromArray = function(array, ...removalValues) {
    return array.filter((val) => !removalValues.includes(val))    
};

// Do not edit below this line
module.exports = removeFromArray;
