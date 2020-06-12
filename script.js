//TODO: create an array for 1) upper case letters 2) lower case letters 3) special characters 4) numbers

//TODO: WHEN button is pushed, present user with a series of prompts (create a function)

  //TODO: 1)how many letters (8-128), 2)lower case letters? 3)upper case letters? 4)special characters? 5)numbers?

    //TODO: can I set buttons to say "yes" and "no" vs "confirm" and "cancel"?
    
//TODO: tally "true" or "false" for each response

//TODO: after all prompts are answered and recorded, use a random generator to create password meeting criteria

//TODO:either display the password in an alert or write it to the page

//function to allow .toLowerCase to work for an array
// Array.prototype.toLowerCase = function () {
//   for (var i = 0; i < this.length; i++) {
//     this[i] = this[i].toString().toLowerCase();
//   }
// }
function generatePassword() {
  

    //array for uppercase letters
    var upperCase = ["A","B","C","D","E",
    "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    
    //array for lowercase letters using .toLowerCase (trying to be clever didn't work out for me here)
    var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
    
    
    //array for special characters
    var specialChars = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=",";",":","<",">","?","/"];
    
    console.log(specialChars.length);
    
    //array for numbers
    var numbers = ["1","2","3","4","5","6","7","8","9","0"];

    //our full array
    fullArray = [];
    

    //TODO: use a do/while loop to return after invalid entering

    // int i = 0;
    // do {
    //     console.log(i);
    //     i++;
    // } (while i <4);
    // }
    var passLength = 0
    do {
    var passLength = prompt("How many digits long would you like your password to be? *Note: must be between 8 and 128");
      var charNums = parseInt(passLength); 
        // if (charNums>=8 && charNums<=128) {
            // console.log(passLength);
        }
    // }
        while (charNums<8 || charNums>128)
            // alert ("Please re-enter valid criteria"));
        // }
      
      
    var useUpper = confirm("Would you like to use Upper Case letters?");
        if (useUpper) {
            fullArray=fullArray.concat(upperCase);           
            console.log(fullArray);
        }

    var useLower = confirm("Would you like to use Lower Case letters?");
        if (useLower) {
            fullArray=fullArray.concat(lowerCase);            
            console.log(fullArray);
        }

    var useSpecial = confirm("Would you like to use Special Characters?");
        if (useSpecial) {
            fullArray = fullArray.concat(specialChars);            
            console.log(fullArray);
        }

    var useNumbers = confirm("Would you like to use Numbers?");
        if (useNumbers) {
            fullArray = fullArray.concat(numbers);          
            console.log(fullArray);
        }

    var newPassword = "";

        for (var i =0; i < passLength; i++) {
            var randomNum = Math.floor(Math.random() * (fullArray.length-1));
            var randomChar = fullArray[randomNum];
            newPassword+=randomChar;
        }

        return newPassword;
}


    // Assignment Code
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
    
        passwordText.value = password;
    
    
    
   
    }
     // Add event listener to generate button
     generateBtn.addEventListener("click", writePassword);
