/*****************************************

Challenge #18 - Bon Appetit

INSTRUCTIONS
Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.

There is always two lunch choices, and always an odd number of astronauts!

EXAMPLES 
Input:
  const listOfChoices = [
    "Chicken Dinner",
    "Chicken Dinner",
    "Chicken Dinner",
    "Ice Cream Sandwich", 
    "Ice Cream Sandwich"
  ]
Output: 
  Chicken Dinner
  
*****************************************/

// SOLUTION

const chooseLunchWinner = (listOfChoices) => {
  
  // Short solution that works modelled after similar question on StackOverflow
  // return listOfChoices.sort((a, b) => 
  //   listOfChoices.filter(v => v===a).length - 
  //   listOfChoices.filter(v => v===b).length
  // ).pop();
  
  if (listOfChoices.length === 0) return null;
  
  let modeMap = {}, maxEl = listOfChoices[0], maxCount = 1;
  
  for (let i = 0; i < listOfChoices.length; i++){
    let el = listOfChoices[i];
    
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    // If there's a tie
    } else if (modeMap[el] === maxCount) { 
      maxEl += "&" + el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};


// TEST FUNCTION
const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich", 
  "Ice Cream Sandwich"
];

console.log(chooseLunchWinner(listOfChoices)); // Result should be Chicken Dinner