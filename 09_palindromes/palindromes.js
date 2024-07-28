const palindromes = function (str) {
    str.toLowerCase();
    const arry=str.split("");
    let temp=arry.toString();
    const arryRev=arry.reverse();
    let rev=arryRev.toString();
    if(temp==rev)return true;
    else return false;
    
};

// Do not edit below this line
module.exports = palindromes;
