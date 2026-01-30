const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5) + 32);
  fahrenheit = Math.round(fahrenheit *10) / 10;
  return fahrenheit;
};

console.log(convertToCelsius(100)); // 37.8
console.log(convertToFahrenheit(0)); // 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
