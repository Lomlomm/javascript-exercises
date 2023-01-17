const repeatString = function(string, number) {
    let cadena = []
    if(number < 0){
        return 'ERROR'
    }
    for(let i = 0; i<number; i++){
        cadena[cadena.length] = string
    }
    return cadena.join('')
};

// Do not edit below this line
module.exports = repeatString;
