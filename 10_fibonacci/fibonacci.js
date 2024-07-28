const fibonacci = function(num) {
    if (num<0)return'OOPS';
    let fib=1;
    let prev=0;
    for(let i=0;i<num-1;i++){
        let temp=fib;
        fib+=prev;
        prev=temp;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
