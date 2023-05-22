const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };

// Do not edit below this line
console.log(removeFromArray([1, 2, 3, 4, 5, 6], 4))
module.exports = removeFromArray;
