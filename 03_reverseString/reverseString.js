// My Solution
const reverseString = function (someString) {
    let newString = '';
    for(let i = someString.length; i > 0; i--) {
        newString += someString.charAt(someString.length-1);
        someString = someString.slice(0, -1);
    }
    return newString;
};

// TOP's Solution
const reverseString = function(string) {
    return string.split('').reverse().join('');
   };
   
   module.exports = reverseString;

// Do not edit below this line
module.exports = reverseString;
