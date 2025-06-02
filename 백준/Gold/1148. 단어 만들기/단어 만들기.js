const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const dictionary = [];
while (true) {
  const word = input[index++];

  if (word === "-") break;

  dictionary.push(word);
}

const answer = [];
while (true) {
  const puzzle = input[index++];

  if (puzzle === "#") break;

  answer.push(get_puzzle_words(puzzle));
}

console.log(answer.join("\n"));

function get_puzzle_words(puzzle) {
  const puzzle_words = [];
  for (let word of dictionary) {
    if (is_puzzle_word(word, puzzle)) {
      puzzle_words.push(word);
    }
  }

  puzzle = [...new Set(puzzle.split(""))];
  const puzzle_map = new Map();
  for (let i = 0; i < puzzle.length; i++) {
    puzzle_map.set(puzzle[i], 0);
  }

  for (let word of puzzle_words) {
    word = [...new Set(word.split(""))];
    for (let i = 0; i < word.length; i++) {
      if (puzzle_map.has(word[i])) {
        puzzle_map.set(word[i], puzzle_map.get(word[i]) + 1);
      }
    }
  }

  let min_value = Infinity;
  let max_value = 0;
  for (let [_, value] of puzzle_map) {
    min_value = Math.min(min_value, value);
    max_value = Math.max(max_value, value);
  }

  const min_puzzle = [];
  const max_puzzle = [];
  for (let [key, value] of puzzle_map) {
    if (value === min_value) {
      min_puzzle.push(key);
    }
    if (value === max_value) {
      max_puzzle.push(key);
    }
  }

  const answer = [];

  answer.push(min_puzzle.sort().join(""));
  answer.push(min_value);
  answer.push(max_puzzle.sort().join(""));
  answer.push(max_value);

  return answer.join(" ");
}

function is_puzzle_word(word, puzzle) {
  const arr = puzzle.split("");
  for (let w of word) {
    const idx = arr.indexOf(w);

    if (idx === -1) return false;

    arr[idx] = ".";
  }

  return true;
}
