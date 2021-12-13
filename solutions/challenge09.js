/*****************************************

Challenge #9 - Media mania!

INSTRUCTIONS
Your task is to create a function that will take in an array representing the roster of astronauts, 
and return an array containing the jobs of each astronaut as a string.

In other terms, for each astronaut of the roster, you want to take the job and add it to a list, 
then return said list.

EXAMPLES 
Input:
  const exampleRoster = [
    {
      ...
      job:"Shuttle DJ"
    },
    {
      ...
      job:"Space Cook"
    }
  ] 
Output:
  ["Shuttle DJ", "Space Cook"]
  
*****************************************/

// SOLUTION

const listAstronautJobs = (roster) => {
  const jobArray = [];
  for (let i = 0; i < roster.length; i++){
      // console.log(roster[i].job)
      jobArray.push(roster[i].job)
  };
  return jobArray;
}

// TEST FUNCTION
const exampleRoster = [
  {
    name: "Apple Banana",
    hometown: "Toronto",
    job:"Shuttle DJ"
  },
  {
    name: "Cherry Dans",
    hometown: "Vancouver",
    job:"Space Cook"
  }
]; 

console.log(listAstronautJobs(exampleRoster));