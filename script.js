// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//DOM Elements, linking html ID
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("upper");
const lowerCaseEl = document.getElementById("lower");
const numbersEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//
//add + to length to change from string to number
generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasUpper = upperCaseEl.checked;
  const hasLower = lowerCaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolEl.checked;

  password.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//generating the password function
function generatePassword(lower, upper, number, symbol, length){


  let generatePassword = "";

  const typesCount = lower + upper + number + symbol;

  //console.log("typesCount: ", typesCount ); - checking if types count had all 4 parameters

  const typesArray = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  //console.log("typesArray: ", typesArray ); - used this for testing

  if(typesCount === 0) {
    return "";
  }
  for(let i = 0; i < length; i+= typesCount){
    typesArray.forEach(type => {

      const funcName = Object.keys(type)[0];

     // console.log("funcName: ", funcName); - testing funcName

      generatePassword += randomFunc[funcName]();
    })
  }

  const finalPassword = generatePassword;

  return finalPassword;

}

//generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*_-<>?{[/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
