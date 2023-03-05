const fibonacci = function(number) {
    parseInt(number)
    if (number < 0){
        return("OOPS")
    }
    var fib = []
    fib.push(1)
    fib.push(1) 

    for(let i = 2; i < number; i++){
        fib.push(fib[i-1] + fib[i-2])
    }
    console.log(fib)
    return(fib[number-1])
};

// Do not edit below this line
module.exports = fibonacci;
