// Assignment Code
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

function generatePassword(){
  
  var passChar = []; 
  var tempPass = "";
  
  
  minLength = parseInt(prompt("Please enter a minimum password length."));
    
   while ((!(minLength>=8)) || (!(minLength <=128))) {
    
    minLength = parseInt(prompt("Invalid input. Please enter a length between 8 and 128."));
   
  }
  

  maxLength = parseInt(prompt( "Please enter a maximum password length."));
    
  while ((!(maxLength<=128)) || (!(maxLength >= minLength))){
    
    maxLength = parseInt(prompt("Invalid input. Please enter a length between " + minLength + " and 128."));
   
  }
 
    do{

    var useLower = confirm("Do you want lower case?")
    var useUpper = confirm("Do you want upper case?")
    var useNumber = confirm("Do you want numbers?")
    var useSpecial = confirm("Do you want special charecters")
    }
    while(!(useLower && useUpper && useNumber && useSpecial))
  
  var fixLength = maxLength - minLength + 1;

  var passLength = Math.floor((Math.random()*fixLength)+minLength);


  
  if (useLower){
    for (var i=0; i<lowerChar.length; i++){
      passChar.push(lowerChar[i]);
    }
  }

  
if (useUpper) {
  for(var j=0; j<upperChar.length; j++){
    passChar.push(upperChar[j]);
  }
}
  
if (useNumber){
  
for(var k=0; k<numberChar.length; k++){
    passChar.push(numberChar[k]);
  }
}
  
if (useSpecial){
for(var l=0; l<specialChar.length; l++){
    passChar.push(specialChar[l]);
  }
}

  for(var m=0; m<passLength; m++){
  tempPass = tempPass + passChar[Math.floor(Math.random()*passChar.length)];
  }

  return tempPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//geberateBtn.addEventListener("click", generatePassword); 

