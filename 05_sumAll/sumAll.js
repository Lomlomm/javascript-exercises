const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0){
        return 'ERROR'
    }
    else if(typeof(num1) != 'number' || typeof(num2) != 'number'){
        return 'ERROR'
    }

    let mini = Math.min(num1, num2)
    let maxi = Math.max(num1, num2)
    let suma = 0; 
    for (let i = mini; i <= maxi; i++){
        suma += i
    }
    return suma
};

// Do not edit below this line
module.exports = sumAll;
