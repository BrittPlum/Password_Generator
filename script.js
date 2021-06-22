// variable decleration
var generateBtn = document.querySelector("#generate");

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numberChar = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=" ];

var minLength = 8;
var maxLength = 128; 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This function generates a password to the lastPass variable 
function generatePassword(){
  
  var passChar = []; 
  var tempPass = [];
  var lastPass = "";
  
  var x;
  var y;
  var z;

// Asks user for minimum password length 
  minLength = parseInt(prompt("Please enter a minimum password length."));
    
   while ((!(minLength>=8)) || (!(minLength <=128))) {
    
    minLength = parseInt(prompt("Invalid input. Please enter a length between 8 and 128."));
   
  }
  
// Asks user for maximum password length 
  maxLength = parseInt(prompt( "Please enter a maximum password length."));
    
  while ((!(maxLength<=128)) || (!(maxLength >= minLength))){
    
    maxLength = parseInt(prompt("Invalid input. Please enter a length between " + minLength + " and 128."));
   
  }
 
    do{
// prompts user for charecter sets
    var useLower = confirm("Do you want lower case?")
    var useUpper = confirm("Do you want upper case?")
    var useNumber = confirm("Do you want numbers?")
    var useSpecial = confirm("Do you want special charecters")
    }
    while((!useLower && !useUpper && !useNumber && !useSpecial))
  
  // This is from an early version and it chosses a random length between the min and max length
  var fixLength = maxLength - minLength + 1;

  var passLength = Math.floor((Math.random()*fixLength)+minLength);


  // Adds individual charecter sets to the password charecter sets
  if (useLower){
    tempPass.push(lowerChar[Math.floor(Math.random()*lowerChar.length)]);
    for (var i=0; i<lowerChar.length; i++){
      passChar.push(lowerChar[i]);
    }
  }

  
if (useUpper) {
    tempPass.push(upperChar[Math.floor(Math.random()*upperChar.length)]);
  for(var j=0; j<upperChar.length; j++){
    passChar.push(upperChar[j]);
  }
}
  
if (useNumber){
    tempPass.push(numberChar[Math.floor(Math.random()*numberChar.length)]);
  for(var k=0; k<numberChar.length; k++){
    passChar.push(numberChar[k]);
  }
}
  
if (useSpecial){
    tempPass.push(specialChar[Math.floor(Math.random()*specialChar.length)]);
  for(var l=0; l<specialChar.length; l++){
    passChar.push(specialChar[l]);
  }
}


// Fills tempPass with random charecters

  for(var m=tempPass.length; m<passLength; m++){
  tempPass.push(passChar[Math.floor(Math.random()*passChar.length)]);
  }

  
// fisher yates model that does a random sort on tempPass

for (x = tempPass.length -1; x > 0; x--) {
  y = Math.floor(Math.random() * x)
  z = tempPass[x]
  tempPass[x] = tempPass[y]
  tempPass[y] = z
}
// Puts the elements of the temppass into the string lastPass
for (n=0; n<tempPass.length; n++){
    lastPass=lastPass+tempPass[n];
}

  return lastPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//geberateBtn.addEventListener("click", generatePassword); 

