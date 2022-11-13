// Assignment Code
var generateBtn = document.querySelector("#generate");
var Numbers = ['1,2,3,4,5,6,7,8,9,0'];
var Symbols = ['!,@,#,$,%,^,&,&,*,.'];
var Lower = ['q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m']
var Upper = ['Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,']


function generatePassword(){
 
  var userInput =  window.prompt("how long would you like for the password to be? must be between 8 and 128 characters.");
  var passwordLength = parseInt(userInput)
  var wantsNumbers = window.confirm("Would you like to include numbers in your password?");
  var wantsSymbols = window.confirm("Would you like to include symbols in your password?");
  var wantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var wantsUppercase = window.confirm("Would you like to include uppercase characters in your password?");

  emptyArray = []

  if (isNaN(passwordLength)){
    window.alert("input invalid. this is not a number")
    return;
  } 

  if (passwordLength < 8 || passwordLength > 128){
    window.alert("password must be between 8 and 128 characters")
    return;
  }

  if (wantsNumbers === true){
    emptyArray.push(Numbers)
  }

  if (wantsSymbols === true){
    emptyArray.push(Symbols)
  }
 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
