/**
 * Set options for password configuration
 * This will be updated based on user input from the password configuration form
 */
const passwordConfig = {
  length: 15,
  letters: true,
  numbers: false,
  symbols: false,
  passwordOne: "",
  passwordTwo: "",
};
// console.log(passwordConfig);

// prettier-ignore
const characters = {
  letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specials: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/",],
  symbols: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/",],
};

// Get elements
let passwordLengthEl = document.getElementById("password-length-el");
let passwordNumbersInputEl = document.getElementById("password-numbers-el");
let passwordSymbolsInputEl = document.getElementById("password-symbols-el");

// Get options from password config section
const passwordConfig = {
  length: passwordLengthEl.value,
  letters: true,
  numbers: false,
  symbols: false,
};
console.log(passwordConfig);

// Function to toggle the checkbox
function toggleInConfig(optionToToggle) {
  if (optionToToggle === "numbers") {
    passwordConfig.numbers = !passwordConfig.numbers;
  } else if (optionToToggle === "symbols") {
    passwordConfig.symbols = !passwordConfig.symbols;
  }
  console.log(passwordConfig);
}

/**
 * Updates the password length in the password configuration object
 * when the user changes the password length in the form.
 */
function updatePasswordLengthInConfig() {
  passwordConfig.length = passwordLengthEl.value;
  console.log(passwordConfig);
}

