/*****************************************

Challenge #19 - It's Pumpkin Spice Time

INSTRUCTIONS
Your task is to write a function that will take in a list of data entries in the shape of an array of objects. 
The function will then organize and return the entries by type and store each bit of data (string) in each list, 
in the shape of an object containing arrays.

EXAMPLES 
Input:
  const listOfReceivedData = [
    {type: "astro", data: "Saturn Data"},
    {type: "bio", data: "Space Potatoes"},
    {type: "physics", data: "Lagrange Points"},
    {type: "bio", data: "OMG Tardigrades"},
    {type: "physics", data: "Material reflectivity"},
    {type: "astro", data: "Mercury is not the hottest"},
  ]
Output: 
  {
    "astro":  ["Saturn Data", "Mercury is not the hottest"],
    "bio": ["Space Potatoes", "OMG Tardigrades"],
    "physics": ["Lagrange Points", "Material reflectivity"],
  }
  
*****************************************/

// SOLUTION

const organizeData = (receivedData) => {
  const results = {};
  
  // Loop through the array
  for (let i = 0; i < receivedData.length; i++) {
    // For every new input, create an entry for key and value is the data 
    if (!results[receivedData[i].type]) {
      results[receivedData[i].type] = []
    }
  }
  // Iterate over array again and append the data to matching key
  for (let key in results) {
    for (let j = 0; j < receivedData.length; j++) {
      if (key === receivedData[j].type) {
        results[key].push(receivedData[j].data)
      }
    }
  }
  return results;
};


// TEST FUNCTION
const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
];

console.log(organizeData(listOfReceivedData));