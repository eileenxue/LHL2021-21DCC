/*****************************************

Challenge #12 - From novice to master

INSTRUCTIONS
Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. 
The function will then parse a message from each object, add it to an array then return the built array.

Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch.

EXAMPLES 
Input:
  const messages = [
    {origin:"MC", message:"Hello!"},
    {origin:"Shuttle", message:"Hey!"},
  ] 
Output: 
  [
    "MC: Hello!",
    "Shuttle: Hey!"
  ]
  
*****************************************/

// SOLUTION

// Add another helper function for parsing message
const parseMessage = (origin, message) => {
  return `${origin}: ${message}`;
};

const parseTranscripts = (messages) => {
  let parsedMessages = [];
  for (let i = 0; i < messages.length; i++){
    parsedMessages.push(parseMessage(messages[i].origin, messages[i].message));
  };
  
  return parsedMessages;
};


// TEST FUNCTION
const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
];

console.log(parseTranscripts(messages));