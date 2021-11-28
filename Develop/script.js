// Assignment code here
    // chars array variables
    function randomUppers() {
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperChars[Math.floor(Math.random() * upperChars.length)];
    }
    
    function randomLowers() {
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    return lowerChars[Math.floor(Math.random() * lowerChars.length)]
    }
    
    function randomNumbers() {
    var numbers = "1234567890";
    return numbers[Math.floor(Math.random() * numbers.length)]
    }

    function randomSpecials() {
    var specialChars = "!@#$%^&*-+"; 
    return specialChars[Math.floor(Math.random() * specialChars.length)]
    }
    
    // Create new array to hold possible chars
 


function generatePassword() {
    // Ask user if they'd like to use uppercase letters
    var confirmUpperCases = confirm("Would you like to use uppercase letters?")
    // Log a resulting message to the console so we know that it worked
    if (confirmUpperCases === true) {
      console.log("You chose to use uppercase letters.")
      console.log(randomUppers())

      console.log()
      // Concat the new array with uppercase
    } else {
      console.log("You chose not to use uppercase letters.")
    }

    // Ask user if they'd like lowercase letters
    var confirmLowerCase = confirm("Would you like to use lowercase letters?")
    // Log a resulting message to the console so we know that it worked
    if (confirmLowerCase === true) {
      console.log("You chose to use lowercase letters.")
      console.log(randomLowers())
    } else {
      console.log("You chose not to use lowercase letters.")
    }

    // Ask user if they'd like numbers 
    var confirmNumbers = confirm("Would you like to use numbers?")
    // Log a resulting message to the console so we know that it worked
    if (confirmNumbers === true) {
      console.log("You chose to use numbers.")
      console.log(randomNumbers())

    } else {
      console.log("You chose not to use numbers.")
    }

    // Ask user if they'd like special characters
    var confirmSpecials = confirm("Would you like to use special characters?")
    // Log a resulting message to the console so we know that it worked
    if (confirmSpecials === true) {
      console.log("You chose to use special characters.")
      console.log(randomSpecials())

    } else {
      console.log("You chose not to use special characters.")
    }

    // Ask user how long the password will be
    var passwordLength = window.prompt(
      "How long would you like the password? Please choose between 8-128 characters."
    )
    if (passwordLength === randomUppers())
    // Log a resulting message to the console so we know that it worked
 

    // Loop through the password length
  
};



// Assigning a variable to the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Calls the writePassword function when the generate password is clicked
generateBtn.addEventListener("click", writePassword);
