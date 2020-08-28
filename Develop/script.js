// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */

function generatePassword() {

  let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '<', '>', '/', '?'];


  let children = lowercaseLetters.concat(uppercaseLetters, numbers, specialCharacters);


  // Password is currently blank! We need to make a better one
  let password = "";

  let passwordLength = prompt("How long do you want your password to be?");


  let confirmUppercase = confirm("Do you want to use upper case letters?");
  let uppercase = prompt("What uppercase letters?");

  let confirmLowercase = confirm("Do you want to use lower case letters?");
  let lowercase = prompt("What lowercase letters?");

  let confirmNumbers = confirm("Do you want to use numbers?");
  let whatNumbers = prompt("What numbers?");
  
let confirmSpecialCharacters = confirm("Do you want to use special characters?");
    let Characters = prompt ("What special characters?");


  console.log(passwordLength, confirmUppercase, confirmLowercase, confirmNumbers, confirmSpecialCharacters);





  









return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
