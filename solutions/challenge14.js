/*****************************************

Challenge #14 - List-o-mania

INSTRUCTIONS
Your task is to write a function that will take in an array of objects containing switches. 
The function will change the value of the isOn property to true for every switch in the list, 
and then return the updated array.

You can use the previous switchToggle function from the fourth challenge, however be careful, 
since we want all of them on, not toggled!

EXAMPLES 
Input:
  const toggleList = [
    {
      name:"Air",
      isOn:true
    },
    {
      name:"Radio",
      isOn:false
    },
  ]
  
Output: 
  [
    {
      name:"Air",
      isOn:true
    },
    {
      name:"Radio",
      isOn:true
    },
  ]
  
*****************************************/

// SOLUTION

const switchAllTogglesOn = (toggleList) => {
  // console.log(toggleList[0])
  for (let i = 0; i < toggleList.length; i++) {
    if (toggleList[i].isOn === false){
      toggleList[i].isOn = true;
    };
  };
  
  return toggleList;
}

// TEST FUNCTION
const toggleList = [
  {
    name:"Air",
    isOn:true
  },
  {
    name:"Radio",
    isOn:false
  },
];

console.log(switchAllTogglesOn(toggleList));