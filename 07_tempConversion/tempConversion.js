const convertToCelsius = function(degF) {
  return parseFloat(((degF - 32) * (5/9)).toFixed(1))
};

const convertToFahrenheit = function(degC) {
  return parseFloat((((degC * (9/5)) + 32).toFixed(1)))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
