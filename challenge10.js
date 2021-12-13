/*****************************************

Challenge #10 - Flying Solo

INSTRUCTIONS
Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.

Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.

EXAMPLES 
Input:
  const exampleEntries = [
    { 
      temperature:0, 
      weather:"sunny", 
      windDirection: "NNE", 
      windSpeed:24
    },
    { 
      temperature:10, 
      weather:"cloudy", 
      windDirection: "NNE", 
      windSpeed:9 
    }
  ] 
Output: 
  17
  
*****************************************/

// SOLUTION
const averageWindSpeed = (weatherEntries) => {
  let total = 0;
  
  // Add all the wind speed based on total entries
  for (let i = 0; i < weatherEntries.length; i++) {
    total += weatherEntries[i].windSpeed;
  }

  const average = Math.round(total/weatherEntries.length);
  return average;
}

// TEST FUNCTION
const exampleEntries = [
  { 
    temperature:0, 
    weather:"sunny", 
    windDirection: "NNE", 
    windSpeed:24
  },
  { 
    temperature:10, 
    weather:"cloudy", 
    windDirection: "NNE", 
    windSpeed:9 
  }
];

console.log(averageWindSpeed(exampleEntries));