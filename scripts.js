// prettier-ignore
const characters = {
  letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specials: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/",],
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

