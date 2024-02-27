//მასივში words შეტანილია თამაშის სიტყვები, რომლებიც რენდომის პრინციპით ამოვარდება
const words = [
  "javascript",
  "programming",
  "hangman",
  "computer",
  "internet",
  "coding",
];
//აქ შევქმენი თამაშისთვის აუცილებელი ცვლადები
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = "_".repeat(chosenWord.length);
let attemptsLeft = 10;
let guessedLetters = [];

//ფუნქცია displayWord, რომელიც გვიჩვენებს დამალულ სიტვას
function displayWord() {
  alert("Word: " + guessedWord.split("").join(" "));
  console.log("Word: " + guessedWord.split("").join(" "));
}
//ფუნქცია displayAttempts, რომელიც გვიჩვენებს თამაშის მცდელოებს
function displayAttempts() {
  alert("Attempts left: " + attemptsLeft);
  console.log("Attempts left: " + attemptsLeft);
}
//ფუნქცია displayGuessedLetters, რომელიც გვიჩვენებს თამაშში გამოყენებულ ასოებს
function displayGuessedLetters() {
  alert("Guessed letters: " + guessedLetters.join(", "));
  console.log("Guessed letters: " + guessedLetters.join(", "));
}

//ფუნქცია guessLetter წარმოადგენს უშუალოდ თამაშის ფუნქციას.
function guessLetter() {
  //თუ მომხმარებელი არ შეიყვანს ასობგერას ან შეიყვანს ერთზე მეტ ასოს, გამოდის შესაბამისი შეტყობინება
  let letter = prompt("Guess a letter:").toLowerCase();
  if (!/[a-z]/.test(letter) || letter.length !== 1) {
    alert("Please enter a valid single letter.");
    console.log("Please enter a valid single letter.");
    guessLetter();
    return;
  }
  //თუ მომხმარებელი შეიყვანს იგივე ასობგერას, რომელიც აქამდე უკვე გამოიყენა, გამოდის შესაბამისი შეტყობინება
  if (guessedLetters.includes(letter)) {
    alert("You already guessed that letter.");
    console.log("You already guessed that letter.");
    guessLetter();
    return;
  }
  //აქ უკვე ხდება მომხმარებლის მიერ გამოცნობილი ასობგერის ჩასმა და გამოჩენა
  guessedLetters.push(letter);
  let newGuessedWord = "";
  let letterFound = false;
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === letter) {
      newGuessedWord += letter;
      letterFound = true;
    } else {
      newGuessedWord += guessedWord[i];
    }
  }
  guessedWord = newGuessedWord;
  //მოგების შემთხვევის ლოგიკა
  if (!guessedWord.includes("_")) {
    alert("Congratulations! You guessed the word: " + chosenWord);
    console.log("Congratulations! You guessed the word: " + chosenWord);
    return;
  }
  //მცდელობების ლოგიკა
  if (!letterFound) {
    attemptsLeft--;
  }
  displayWord();
  displayAttempts();
  displayGuessedLetters();
  if (attemptsLeft === 0) {
    alert("Out of attempts! The word was: " + chosenWord);
    console.log("Out of attempts! The word was: " + chosenWord);
    return;
  }
  guessLetter();
}
//თამაშის გაშვება
alert("Welcome to Hangman!");
console.log("Welcome to Hangman!");
displayWord();
displayAttempts();
displayGuessedLetters();
guessLetter();
