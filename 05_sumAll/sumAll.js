const sumAll = function () {
    let sum = 0;
    const ary = [arguments[0], arguments[1]];
    ary.sort();
    for(let i=0;i<ary.length;i++){
        if(typeof(ary[i])!=('number'))return 'ERROR';
    }
    if (ary[0] > 0) {
        for (let i = ary[0]; i <= ary[1]; i++) {
            sum += i;
        }
        return sum;
    }
    else return 'ERROR';
};
// Do not edit below this line
module.exports = sumAll;
