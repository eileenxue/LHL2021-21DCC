/*****************************************

Challenge #8 - It’s all part of the job

INSTRUCTIONS
Your task is to create a function that takes in a roster array, and will calculate the amount of astronauts 
in the given roster list and return said amount.

Sometimes things are just simple, code doesn't need to be complicated!

EXAMPLES 
Input:
  const exampleRoster = [
    {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut",
      job:"Shuttle DJ"
    }
  ]
Output:
  1
  
*****************************************/

// SOLUTION
const countActiveAstronauts = (roster) => {
  return roster.length;
}

// TEST FUNCTION
const exampleRoster = [
  {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut",
    job:"Shuttle DJ"
  }
];

console.log(countActiveAstronauts(exampleRoster));