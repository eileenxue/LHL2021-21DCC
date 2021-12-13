/*****************************************

Challenge #7 - It’s a bird! It’s a plane!

INSTRUCTIONS
Your task is to write a function that takes in the temperature, weather condition, wind speed, and direction 
as parameters and store them inside a structure that holds each value as properties.

There's a small and important detail for this one, you must convert the temperature from Fahrenheit to Celsius 
and convert the wind speed from miles/hour to meters/second, and round both of them before storing them.

The information that LARRY gave you about temperature conversions are in the hint section.
- Fahrenheit to Celsius with : (temp - 32) * 5/9
- Miles/hour to meters/seconds with : speed / 2.237

EXAMPLES 
Input:
  const temperature = 32
  const condition = "Sunny with small clouds"
  const windSpeed = 20
  const windDirection = "NNE"
Output:
  {
    temperature:0,
    windSpeed:9,
    windDirection:"NNE",
    condition:"Sunny with small clouds"
  } 
  
*****************************************/

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Fah to Celsius: (temp - 32) * 5/9
  const newTemp = Math.round((temperature - 32) * 5/9);
  
  // Miles/hour to meters/seconds with : speed / 2.237
  const newSpeed = Math.round(windSpeed / 2.237);
  
  const results = {
    temperature: newTemp,
    windSpeed: newSpeed,
    windDirection,
    condition
  };
  // console.log(results)
  return results;
}

// Test function
const temperature = 32;
const condition = "Sunny with small clouds";
const windSpeed = 20;
const windDirection = "NNE";

console.log(storeWeatherConditions(temperature, condition, windSpeed, windDirection));