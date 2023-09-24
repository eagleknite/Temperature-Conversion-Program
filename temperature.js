// Temperature Metric Converter
// Arnold Twala
// Task complete? No
// task description: Use temperature.js to write a program that converts temperatures between 
// Celsius, Fahrenheit, and Kelvin. 
// The program should ask the user to enter the metric they are converting.
// Ask a user the temperature they want to convert, 
// and then ask them which metric they want to convert to. 
// The program should then output the converted temperature. 


// 1. ask user to input a temperature that they are converting: Celcius(C), Fahrenheit(F), or Kelvin
let metric = prompt(`
    In which metric is the temperature you are converting? 
    C - Celsius
    F - Fahrenheit
    K - Kelvin
    `);

// convert the input to uppercase
let capitallizedMetric = metric.toUpperCase();

// 2. ask user to input the number they want to convert
let temp = Number(prompt(`Please enter the temperature you want to convert`));

// 3. ask user to what they wany to conver their temperature to: Celsius(C), Fahrenheit(F), or Kelvin
let convertTo = prompt(`
    To which metric would you like to convert the temperature?
    C - Celsius,
    F - Fahrenheit 
    K - Kelvin
    `);

// convert the input to uppercase
let capitallizedConvertTo = convertTo.toUpperCase();

// declare variables to be used in the if statements to store the converted temperatures
let celcius;
let fahrenheit;
let kelvin;

// Celsius from Fahrenheit: C = (F - 32) x 5/9
// To convert a temperature from Fahrenheit to Celsius, you first subtract 32 from the Fahrenheit value. 
// Then, multiply the result by 5/9 (approximately 0.5556) to get the temperature in Celsius.
// if the user inputs C and F, and the temperature is greater than or equal to -459.67, then convert the temperature
if (capitallizedMetric === 'F' && capitallizedConvertTo === 'C' && temp >= -459.67) {
  celcius = (temp - 32) * 5/9;
  // Output the converted temperature to the console and alert the user
  console.log(`${temp} F is ${celcius} C`);
  alert(`${temp} F is ${celcius.toFixed(2)} C`);
}

// Celsius from Kelvin: C = K - 273.15
// To convert a temperature from Kelvin to Celsius, you simply subtract 273.15 from the Kelvin value to get the temperature in Celsius.
// if the user inputs K and C, and the temperature is greater than or equal to 0, then convert the temperature
else if (capitallizedMetric === 'K' && capitallizedConvertTo === 'C' && temp >= 0) {
    celcius = temp - 273.15;
    // Output the converted temperature to the console and alert the user
    console.log(`${temp} K is ${celcius} C`);
    alert(`${temp} K is ${celcius.toFixed(2)} C`);
}

// Fahrenheit from Celsius: F = C x 9/5 + 32
// To convert a temperature from Celsius to Fahrenheit, you first multiply the Celsius value by 9/5 (approximately 1.8). 
// Then, add 32 to the result to get the temperature in Fahrenheit.
// if the user inputs C and F, and the temperature is greater than or equal to -273.15, then convert the temperature
else if (capitallizedMetric === 'C' && capitallizedConvertTo === 'F' && temp >= -273.15) {
    fahrenheit = temp * 9/5 + 32;
    // Output the converted temperature as an alert to the user
    alert(`${temp} C is ${fahrenheit.toFixed(2)} F`);
}

// Fahrenheit from Kelvin: F = K x 9/5 - 459.67
// To convert a temperature from Kelvin to Fahrenheit, you first multiply the Kelvin value by 9/5 (approximately 1.8). 
// Then, subtract 459.67 from the result to get the temperature in Fahrenheit.
// if the user inputs K and F, and the temperature is greater than or equal to 0, then convert the temperature
else if (capitallizedMetric === 'K' && convertTo === 'F' && temp >= 0) {
    fahrenheit = temp * 9/5 - 459.67;
    // Output the converted temperature as an alert to the user
    alert(`${temp} K is ${fahrenheit.toFixed(2)} F`);
}

// Kelvin from Celsius: K = C + 273.15
// To convert a temperature from Celsius to Kelvin, you simply add 273.15 to the Celsius value to get the temperature in Kelvin.
// if the user inputs C and K, and the temperature is greater than or equal to -273.15, then convert the temperature
else if (capitallizedMetric === 'C' && capitallizedConvertTo === 'K' && temp >= -273.15) {
    kelvin = temp + 273.15;
    // Output the converted temperature as an alert to the user
    alert(`${temp} C is ${kelvin.toFixed(2)} K`);
}

// Kelvin from Fahrenheit: K = (F + 459.67) x 5/9
// To convert a temperature from Fahrenheit to Kelvin, you first add 459.67 to the Fahrenheit value. 
// Then, multiply the result by 5/9 (approximately 0.5556) to get the temperature in Kelvin.
// if the user inputs F and K, and the temperature is greater than or equal to -459.67, then convert the temperature
else if (capitallizedMetric === 'F' && capitallizedConvertTo === 'K' && temp >= -459.67) {
    kelvin = (temp + 459.67) * 5/9;
    // Output the converted temperature as an alert to the user
    alert(`${temp} F is ${kelvin.toFixed(2)} K`);
}

// If the user enters invalid metric and convertTo values, or if the range of the temperature is invalid, 
// then output an error message and alert the user
else {
  alert(`Please enter valid metric and convertTo values `);
}

// This is what I learned from this project:
// 1. How to use the toFixed() method to round the converted temperature to 2 decimal places.
// 2. How to use the toUpperCase() method to convert the user input to uppercase.
// 3. How to use the Number() method to convert the user input to a number.
// 4. How to use temperature conversion formulas.
// 5. Temperature ranges for each metric.

// Reference:
// https://www.cuemath.com/temperature-conversion-formulas/
// https://www.geeksforgeeks.org/temperature-converter-using-html-css-and-javascript/
// https://javascript.plainenglish.io/building-a-temperature-converter-app-using-html-css-and-javascript-52097d9d3e98
// https://www.livescience.com/temperature.html
// https://www.w3schools.com/jsref/jsref_tofixed.asp
// https://www.geeksforgeeks.org/javascript-number-tofixed-method/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://www.freecodecamp.org/news/javascript-uppercase-how-to-capitalize-a-string-in-js-with-touppercase/
