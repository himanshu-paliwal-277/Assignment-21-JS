// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test the function with various patterns and strings.

const isMatch = function(regexPattern, str) {
    return regexPattern.test(str);
}

const pattern1 = /^(?=.*[A-Z])/;

console.log(isMatch(pattern1, "Hello World"));
console.log(isMatch(pattern1, "hello"));

const pattern2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(isMatch(pattern2, "abc123@gmail.com"));
console.log(isMatch(pattern2, "xyzgmail.com"));

const pattern3 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;

console.log(isMatch(pattern3, "Hello World"));
console.log(isMatch(pattern3, "One is 1"));