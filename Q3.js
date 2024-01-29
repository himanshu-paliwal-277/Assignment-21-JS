// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions. Create a function that searches for specific character classes in a given string and returns the matches. Test the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

function findMatches(pattern, str) {
    return str.match(pattern);
}

const TestString = "HELLO World! 123@$";

const digitPattern = /\d/g;       
const uppercasePattern = /[A-Z]/g;     
const lowercasePattern = /[a-z]/g;     
const specialCharPattern = /[\W_]/g;   

console.log("Digits: ", findMatches(digitPattern, TestString));
console.log("Uppercase Letters: ", findMatches(uppercasePattern, TestString));
console.log("Lowercase Letters: ", findMatches(lowercasePattern, TestString));
console.log("Special Characters: ", findMatches(specialCharPattern, TestString));
