// Assignment code here
function generatePassword() {
    // array variables
    var potentialCharactersArray =[
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 
      ['!', "@", '#', '$', '%', '^', '&', '*', '-', '+']]; 
  
    // confirm variables
    var userWantsNumbers = confirm(
      "Would you like your password to include numbers?"
    );
    var userWantsUppercase = confirm(
      "Would you like your password to include uppercase letters?"
    );
    var userWantsLowerCase = confirm(
      "Would you like your password to include lowercase letters?"
    );
    var userWantsSpecialChars = confirm(
      "Would you like your password to include special characters?"
    );
  
    // if statements
    if (userWantsNumbers) {
      console.log("The user does want numbers.");
    } else {
      console.log("The user doesn't want numbers.");
    }
    if (userWantsUppercase) {
      console.log("The user does want uppercase letters.");
    } else {
      console.log("The user doesn't want uppercase letters.")
    }
    if (userWantsLowerCase) {
      console.log("The user does want lowercase letters.");
    } else {
      console.log("The user doesn't want lowercase letters.")
    }
    if (userWantsSpecialChars) {
      console.log("The user does want special characters.");
    } else {
      console.log("The user doesn't want special characters.")
    }

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
