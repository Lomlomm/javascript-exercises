const removeFromArray = function(array, ...args) {
    let arFiltered = array.filter((value) => !args.includes(value))
    console.log(arFiltered)
    return arFiltered
};

// Do not edit below this line
module.exports = removeFromArray;
