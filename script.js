//generate random password
function generate(){

  //set password length/complexity
  let complexity = document.getElementById("slider").value;
   
  //possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let password = "";

  //create for loop to choose pw characters
  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  
  //add pw to textbox/displayarea
  document.getElementById("display").value = password;
}

//set default length display of 15
document.getElementById("length").innerHTML = "Length: 15";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 0){
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
    document.getElementById("length").innerHTML = "Length: 1";
  }
}





// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
