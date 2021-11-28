// Assignment code here
    // Characters array
    var upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+']; 

    var randomUpper = upperCases[Math.floor(Math.random()*upperCases.length)]; 


function generatePassword() {

    // Ask user how long the password will be
    var passwordLength = window.prompt("How long would you like the password? Please choose between 8-128 characters.")
    if (passwordLength >= "8" || passwordLength <= "128") {
      console.log('')
    } else {
      window.alert("Please choose a valid character length.");
      writePassword();
    }

    // Ask user if they'd like uppercase letters
    var confirmUpperCases = confirm("Would you like to use uppercase letters?")
    // Log a resulting message to the console so we know that it worked
    if (confirmUpperCases === true) {
      console.log("You chose to use uppercase letters.")
      console.log(randomUpper)
    } else {
      console.log("You chose not to use uppercase letters.")
    }

    // Ask user if they'd like lowercase letters
    var confirmLowerCase = confirm("Would you like to use lowercase letters?")
    // Log a resulting message to the console so we know that it worked
    if (confirmLowerCase === true) {
      console.log("You chose to use lowercase letters.")
      console.log(lowerCases)
    } else {
      console.log("You chose not to use lowercase letters.")
    }

    // Ask user if they'd like numbers 
    var confirmNumbers = confirm("Would you like to use numbers?")
    // Log a resulting message to the console so we know that it worked
    if (confirmNumbers === true) {
      console.log("You chose to use numbers.")
      console.log(numbers)
    } else {
      console.log("You chose not to use numbers.")
    }

    // Ask user if they'd like special characters
    var confirmSpecials = confirm("Would you like to use special characters?")
    // Log a resulting message to the console so we know that it worked
    if (confirmSpecials === true) {
      console.log("You chose to use special characters.")
      console.log(specials)
    } else {
      console.log("You chose not to use special characters.")
    }
    
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
