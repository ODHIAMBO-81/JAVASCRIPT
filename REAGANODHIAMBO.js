function isEven(num) {
    //Use the modulo operator to determine if num is divisible by 2
    return num % 2 === 0;
}

//Test cases
console.log(isEven(4)); //Expected output:True
console.log(isEven(7)); //Expected output:False
console.log(isEven(-2)); //Expected output:True
console.log(isEven(9)); //Expected output:False