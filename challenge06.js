/*****************************************

Challenge #6 - Another day, another challenge

INSTRUCTIONS
Create a function that takes in a roster array and an astronaut object. 
The function will add the astronaut to the roster and return the updated roster.

EXAMPLES 
Input:
  const exampleRoster = []
  const exampleAstronaut = {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut"
  }
Output:
  const exampleRoster = [
    {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    }
  ]
  
*****************************************/

const addAstronautToRoster = (roster, astronaut) => {
  roster.push(astronaut);
  return roster;
};

// Test function
const exampleRoster = [];
const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

console.log(addAstronautToRoster(exampleRoster, exampleAstronaut));
