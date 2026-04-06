// Import random.js file
import getRandomInt from "./utils/random.js";
const quotes = [
  "Q1",
  "Q2",
  "Q3",
  "Q4"
];

// Done 3: Create and export getRandomQuote function
//Hint: export function getRandomQuote(){}
export function getRandomQuote() {
  const index = getRandomInt(quotes.length);
  return quotes[index];
}

