//Wordlist object containing various words to be used for the game
const wordList = [
  "dog",
  "father",
  "house",
  "eel",
  "apple",
  "caramel",
  "html",
  "sql",
  "javascript",
];

//Function selects a random word from the wordList
// This will be exported to the game component
function randomWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

export { randomWord };
