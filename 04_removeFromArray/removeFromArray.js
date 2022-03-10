// My Solution
const removeFromArray = function (array1, ...array2) {
    nextIteration:
    for (i of array2) {
        j = array1.indexOf(i);
        // elements not in the array return an index value of -1
        if (j !== -1) {
            array1.splice(j, 1);
        } else {
            continue nextIteration;
        }
    }
    return array1;
};

// TOP Basic Solution
const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if(!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// TOP Advanced Solution
var removeFromArray = function(...args) {
    const array = args[0]
    return array.filter(val => !args.includes(val))
}
//
// Do not edit below this line
module.exports = removeFromArray;
