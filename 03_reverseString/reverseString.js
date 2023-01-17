const reverseString = function(string) {
    let reverse = []
    for(let i = string.length-1; i > -1; i--){
        reverse[reverse.length] = string[i]
    }
    return reverse.join('')
};


// Do not edit below this line
module.exports = reverseString;
