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
  symbols: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/",],
};
// console.log(characters);

/**
 * Get the elements from the DOM
 */
const passwordLengthEl = document.getElementById("password-length-el");
const passwordNumbersInputEl = document.getElementById("password-numbers-el");
const passwordSymbolsInputEl = document.getElementById("password-symbols-el");
const passwordGenerateBtn = document.getElementById("password-generate-btn");
const passwordOutputOneEl = document.getElementById("password-output-one-el");
const passwordOutputTwoEl = document.getElementById("password-output-two-el");
const passwordOutputOneBtn = document.getElementById("password-output-one-btn");
const passwordOutputTwoBtn = document.getElementById("password-output-two-btn");
const passwordAlertEl = document.getElementById("password-alert-el");

/**
 * Updates the numbers and symbols options in the password configuration object
 * when the user toggles the numbers or symbols options in the form.
 * passwordConfig.numbers = !passwordConfig.numbers; is a toggle operation
 * that changes the value of passwordConfig.numbers to the opposite of what it was.
 */
function toggleInConfig(optionToToggle) {
  if (optionToToggle === "numbers") {
    passwordConfig.numbers = !passwordConfig.numbers;
  } else if (optionToToggle === "symbols") {
    passwordConfig.symbols = !passwordConfig.symbols;
  }
  console.log(passwordConfig);
}
passwordNumbersInputEl.addEventListener("click", () => toggleInConfig("numbers"));
passwordSymbolsInputEl.addEventListener("click", () => toggleInConfig("symbols"));

/**
 * Updates the password length in the password configuration object
 * when the user changes the password length in the form.
 */
function updatePasswordLengthInConfig() {
  passwordConfig.length = passwordLengthEl.value;
  console.log(passwordConfig);
}
passwordLengthEl.addEventListener("input", () => updatePasswordLengthInConfig());

/**
 * Generates a password based on the password configuration object
 */
function generatePassword() {
  let passwordCharacters = [];
  passwordConfig.passwordOne = "";
  passwordConfig.passwordTwo = "";
  if (passwordConfig.letters) {
    passwordCharacters = passwordCharacters.concat(characters.letters);
  }
  if (passwordConfig.numbers) {
    passwordCharacters = passwordCharacters.concat(characters.numbers);
  }
  if (passwordConfig.symbols) {
    passwordCharacters = passwordCharacters.concat(characters.symbols);
  }

  for (let i = 0; i < passwordConfig.length; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    passwordConfig.passwordOne += passwordCharacters[randomIndex];
  }
  for (let i = 0; i < passwordConfig.length; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    passwordConfig.passwordTwo += passwordCharacters[randomIndex];
  }
  passwordOutputOneEl.value = passwordConfig.passwordOne;
  passwordOutputTwoEl.value = passwordConfig.passwordTwo;
  // console.log(passwordConfig);
}
passwordGenerateBtn.addEventListener("click", () => generatePassword());

function removeClassesAfterDisplay(status) {
  setTimeout(() => {
    passwordAlertEl.classList.remove(status, "active");
    passwordAlertEl.textContent = "";
  }, 3000);
}

/**
 * Copies the password to the clipboard.
 * From MDN - https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
 * If password fields are empty, it shows an error message.
 * If a password is available, it copies the password to the clipboard
 * and shows a success message.
 * @param {string} password - The password to be copied to the clipboard.
 */
function copyPassword(password) {
  if (!password) {
    passwordAlertEl.textContent = "No password to copy";
    passwordAlertEl.classList.add("error", "active");
    removeClassesAfterDisplay("error");
  } else {
    /**
     * Writes the given text to the clipboard.
     * @param {string} text - The text to be copied to the clipboard.
     */
    async function writeClipboardText(text) {
      try {
        await navigator.clipboard.writeText(text);
        passwordAlertEl.textContent = "Password copied to clipboard";
        passwordAlertEl.classList.add("success", "active");
        removeClassesAfterDisplay("success");
      } catch (error) {
        console.error(error.message);
        passwordAlertEl.textContent = "Failed to copy password";
        passwordAlertEl.classList.add("error", "active");
      }
    }

    writeClipboardText(password);
  }
}

/**
 * Adds an event listener to the button to copy the password when clicked.
 */
passwordOutputOneBtn.addEventListener("click", () => copyPassword(passwordOutputOneEl.value));
passwordOutputTwoBtn.addEventListener("click", () => copyPassword(passwordOutputTwoEl.value));
