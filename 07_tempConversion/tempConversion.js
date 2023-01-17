const convertToCelsius = function(temp) {
  if (temp == 32){
    return 0
  }
  else{
    return Math.round(temp-32*(5/9))
  }
};

const convertToFahrenheit = function(temp) {
  if (temp == 0){
    return 0
  }
  else{
    return Math.round(temp*(9/5)+32)
  }


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
