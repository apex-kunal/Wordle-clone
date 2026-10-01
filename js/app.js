// overall app state object goes here 
const state = {
  secret: "SNAKE", // an example 
  guesses: [],          // array of scored rows (length 0–6)
  currentInput: "",     // letters typed for the current row (max 5)
  status: "playing",    // "playing" | "won" | "lost"
  message: "",          // "Not a word", "Not enough letters", ""
  keyboard: {}          // { A: "absent", S: "correct", ... } only keys that were used
}
