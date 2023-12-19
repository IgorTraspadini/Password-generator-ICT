// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

/* Your application must:
- Generate a password when the button is clicked.
- Present a series of prompts for password criteria:
  Length of password:
    At least 8 characters but no more than 128.
  Character types:
    Lowercase
    Uppercase
    Numeric
    Special characters ($@%&*, etc.)
- Code should validate for each input and at least one character type should be selected.
- Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.
 */

// Variables to store the big array and the password generated.
let bigarray = [];
let generatedPassword = "";
let passwordlength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    passwordlength = parseInt(prompt("Inform the length of password (at least 8 characters but no more than 128.)"));
  } while (passwordlength > 128 || passwordlength < 8);

  do {
    if (confirm("Do you want Lowercase?")) {
      bigarray = bigarray.concat(lowerCasedCharacters);
      generatedPassword = generatedPassword.concat(getRandom(lowerCasedCharacters));
    }
    if (confirm("Do you want Uperrcase?")) {
      bigarray = bigarray.concat(upperCasedCharacters);
      generatedPassword = generatedPassword.concat(getRandom(upperCasedCharacters));
    }
    if (confirm("Do you want Numeric?")) {
      bigarray = bigarray.concat(numericCharacters);
      generatedPassword = generatedPassword.concat(getRandom(numericCharacters));
    }
    if (confirm("Do you want Special characters ($@%&*, etc.)?")) {
      bigarray = bigarray.concat(specialCharacters);
      generatedPassword = generatedPassword.concat(getRandom(specialCharacters));
    }
  } while (bigarray.length === 0);
}

// Function for getting a random element from an array
function getRandom(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  for (let i = generatedPassword.length; i < passwordlength; i++) {
    generatedPassword = generatedPassword.concat(getRandom(bigarray));
  }
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  bigarray = [];
  generatedPassword = "";
  passwordlength = 0;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);