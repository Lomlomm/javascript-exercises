const add = function(a,b) {
  return(a+b)
};

const subtract = function(a,b) {
	return(a-b)
};

const sum = function(values) {
  let suma = 0;
	for (let value in values){
    console.log(values[value])
    suma += values[value]
  }
  return(suma)
};

const multiply = function(numbers) {
  result = 1
  for(let number in numbers){
    result *= numbers[number]
  }
  return(result)
};

const power = function(a,b) {
	return(a**b)
};

const factorial = function(number) {
	let factorial = 1
  for(let i=0; i<number; i++){
    factorial *= i+1
  } 
  return(factorial)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
