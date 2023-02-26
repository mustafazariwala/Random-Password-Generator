// Assignment Code
generateBtn.addEventListener("click", writePassword);
//Query Selectors
 //The user clicks the 'generate' button
 var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password"); 
//declare variables for data inputs
var characterLength = 15;
var CriteriaArr = []; 
var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "/", "?" ];
//Write function that generates password in text box area
function Prompts() {
  CriteriaArr [];
  characterLength = parseInt(prompt("How long would you like your password to be? (Must be between 8-128 characters"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be between 8-128 characters, please try again")
    return false;
}
  if (confirm("Would you like to add lowercase letters in your password?")) {
    CriteriaArr = (lowerCase);
  }
  if (confirm("Would you like to add uppercase letters in your password?")) {
    CriteriaArr = (UpperCase);
  }
  if(confirm("Would you like to add a number in your password?")) {
    CriteriaArr = (numSet);
  }
  if(confirm("Would you like to add a special character in your password?")) {
    CriteriaArr = (specialChar);
  }
  return true;
}
// Write password to the #password input
function writePassword() {
  var correctPrompts = writePrompts(); //This will make sure the user enters the correct prompts/data
  if(correctPrompts) { //Generate password based on the prompts below
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword; //changed var to newPassword as used Password var above to avoid duplicates
  } else {
    passwordText.value = "";
  }
}
//Write a function that generates a random password- which defines the "null" password
function generatePassword() { //this loop will make sure to gather any random data in the Criteria array, based on the character length selected
  var password = "";
  for(var i = 0; i <characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * CriteriaArr.length);
    password = password + CriteriaArr[randomIndex];
  }
  return password;
}


// Add event listener to generate button

//function generatePassword() {
 // var optionsVariable
  //characterLength = parseInt(prompt("How long would you like your password to be? (must be between 8-128 characters"));
   // if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
   //   alert("Password must be between 8-128 characters, please try again")
    //  return false;
     
   // }
    
 

  //characterLength = prompt("How long would you like your password to be? (Must be between 8-128 characters");
  //if(isNaN(characterLength < 8 || characterLength > 128)) {
  //  alert("Character must be a number between 8-128");
   // var characterLength= prompt("Choose a password with at least 8 digits with a maximum of 128");
 // }
 //   var lowerCase = confirm("Would you like to add lowercase letters in your password?");
  //  var upperCase = confirm("Would you like to add uppercase letters in your password?");
  //  var numSet = confirm("Would you like to add a number in your password?");
   // var specialChar = confirm("Would you like to add a special character in your password?");
//}

     // }
     // if lowerCase.(confirm("Would you like to add lowercase letters in your password?")); 
    
    //  if uppercase.(confirm("Would you like to add uppercase letters in your password?"));
  
     // if numSet.(confirm("Would you like to add a number in your password?"));
      
     // if specialChar.(confirm("Would you like to add a special character in your password?"))
    
     // return true;
  
 // }



// Write password to the #password input
//function writePassword() {
  //var correctPrompts= Prompts(); //linking this to correctly completing the prompts
 // if (correctPrompts) { //creating a if statement in case user doesn't correctly prompt need an else statement?
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");
  //passwordText.value = password;
//} else {
  //passwordText.value = ?;
//}




//Write a function that generates a random password- need to create loop to choose password at random
//function generatePassword()
//need to declare variable for password in #password?
  //for(var i = 0; i <characterLength; i++) {
  //  var randomIndex = Math.floor(Math.random() * characterlength);
  //  password = password + characterLength[randomIndex];
 //}
 // return password;
//}
