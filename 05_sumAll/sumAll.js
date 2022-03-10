// My Solution
const sumAll = function (...args) {

    args.sort();
    const arrayOfSequentialNumbers = [];
    let i = args[0];
    let j = args[1];

    if ((typeof i) !== "number" || (typeof j) !== "number" || i < 0 || j < 0) {
        return 'ERROR';
    };

    for (; i <= j; i++) {
        arrayOfSequentialNumbers.push(i);
    };

    const sum = arrayOfSequentialNumbers.reduce((previousValue, currentValue) => 
            previousValue + currentValue);
        return sum;
}

// TOP's Solution
const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  };
  
// Do not edit below this line
module.exports = sumAll;
