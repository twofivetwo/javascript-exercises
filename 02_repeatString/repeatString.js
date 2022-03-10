// My solutions
const repeatString = function(someString, num) {
    if (num < 0) {
        someString = 'ERROR';
    } else {
        someString = someString.repeat(num);
    }
    return someString;
}

// My other Solution
const repeatString = (someString, num) => num < 0 ? someString = 'ERROR' :
    someString = someString.repeat(num);

//TOP's Solution
const repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };

// Do not edit below this line
module.exports = repeatString;
