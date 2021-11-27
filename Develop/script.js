  // Assignment code here
function generatePassword() {
  var array = [];

  /* gather user information
  1. Do they want numbers? - Done
  2. Do they want upper case chars? - Done
  3. Do they want lower case chars? - Done
  4. Do they want special chars? - Done
  */

  const userWantsNumbers = confirm(
    "Would you like your password to include numbers?"
  );
  const userWantsUppercase = confirm(
    "Would you like your password to include uppercase?"
  );
  const userWantsLowerCase = confirm(
    "Would you like your password to include lowercase?"
  );
  const userWantsSpecialChars = confirm(
    "Would you like your password to include special chars?"
  );

  if (userWantsNumbers) {
    console.log("The user does want numbers");
  }
  if (userWantsUppercase) {
    console.log("The user does want uppercase");
  }
  if (userWantsLowerCase) {
    console.log("The user does want lowercase");
  }
  if (userWantsSpecialChars) {
    console.log("The user does want special chars");
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
