// Assignment Code
//Query Selector
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword); //responsive button, users need to click the generate button


 //declare variables for data inputs
var characterLength = 128;
var CriteriaArr = []; 
var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "/", "?" ];


//Write function that generates prompts- assigning the CriteriaArr to each of the 4 arrays
function generatePassword() {
 //Prompts the user to enter a digit between 8-128, not a number is returned or a number outside those digits is entered then an alert displays that takes them back
  characterLength = parseInt(prompt("How long would you like your password to be? (Must be between 8-128 characters"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be between 8-128 characters, please try again")
    return false;
} //If user correctly enters the characters, then they are prompted to select what they want their password to include (may choose to not include any of the below)
  if (confirm("Would you like to add lowercase letters in your password?")) {
    CriteriaArr = CriteriaArr.concat(lowerCase);
    console.log(CriteriaArr)
  }
  if (confirm("Would you like to add uppercase letters in your password?")) {
    CriteriaArr = CriteriaArr.concat(UpperCase);
    console.log(CriteriaArr)
  }
  if(confirm("Would you like to add a number in your password?")) {
    CriteriaArr = CriteriaArr.concat(numSet);
    console.log(CriteriaArr)
  }
  if(confirm("Would you like to add a special character in your password?")) {
    CriteriaArr = CriteriaArr.concat(specialChar);
  }
  console.log(CriteriaArr)

  //this loop will make sure to gather any random data in the choice array, based on the character length selected
  var FinalResult = ""
  for (var i=0; i <characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * CriteriaArr.length);
    console.log(CriteriaArr[randomIndex])
    FinalResult = FinalResult + CriteriaArr[randomIndex];
  }
  console.log(FinalResult)
  return FinalResult;
}


// Write password to the #password input
function writePassword() {
  var Password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = Password; 
}
 

