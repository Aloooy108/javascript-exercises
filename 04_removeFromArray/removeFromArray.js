const removeFromArray = function () {
    let ary = arguments[0];
    for (let i = 0; i < ary.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (ary[i] === arguments[j]) {
                ary.splice(i, 1);
                i--;
            }
        }
    }
    return ary;
}
// Do not edit below this line
module.exports = removeFromArray;
