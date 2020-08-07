var numberOfChar = prompt(
  "Between 8 and 128 how long would you like your password to be?"
);
var useLowerCase = confirm(
  "Hit 'OK' for password to include lowercase letters"
); //2nd prompt is does password include lowercase letters
var useUpperCase = confirm(
  "Hit 'OK' for password to include uppercase letters"
); //3rd prompt is does password include uppercase letters
var useNumbers = confirm("Hit 'OK' for password to include numbers"); //4th prompt is does password include numbers
var useCharacters = confirm(
  "Hit 'OK' for password to include special characters"
); //5th prompt is does password in special characters

// console.log(lowerCase, upperCase, numbers, characters);

function generateToUpperCase() {
  let UpperCase = String.fromCharCode(
    Math.floor(Math.random() * (91 - 65 + 1)) + 65
  );
  console.log(UpperCase);
  return UpperCase;
}

function generateToLowerCase() {
  let LowerCase = String.fromCharCode(
    Math.floor(Math.random() * (123 - 97 + 1)) + 97
  );
  console.log(LowerCase);
  return LowerCase;
}

function generateToNumber() {
  let Numbers = Math.floor(Math.random() * 9);
  return Numbers;
}
function generateSymbol() {
  let Symbols = String.fromCharCode(
    Math.floor(Math.random() * (46 - 33 + 1)) + 33
  );
  return Symbols;
  console.log(Symbols);
}

function generatePassword() {
  let validCharSet = [];
  for (i = 0; i < parseInt(numberOfChar); i++) {
    console.log("for");
    if (validCharSet.length < parseInt(numberOfChar)) {
      console.log("if");
      if (useUpperCase === true) validCharSet.push(generateToUpperCase());
      if (useLowerCase === true) validCharSet.push(generateToLowerCase());
      if (useNumbers === true) validCharSet.push(generateToNumber());
      if (useCharacters === true) validCharSet.push(generateSymbol());
    }
  }

  // let UpperCase = generateToUpperCase();
  // let LowerCase = generateToLowerCase();
  // let Numbers = generateToNumber();
  // let Symbols = "!@#$%^&*(".split("");

  var generatePassword = document.getElementById("password");
  generatePassword.value = validCharSet.join("");
  console.log(validCharSet);
  // console.log(UpperCase, LowerCase, Numbers);
}
document.getElementById("generate").addEventListener("click", generatePassword);
