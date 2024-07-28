const reverseString = function (str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        let temp = str.charAt(str.length - i - 1);
        output = output + temp;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
