function reverseString(str){
    return String(str).split('').reverse().join('');
}
function reverseStringConsise(str) {
    return String(str).split('').reverse().join('');
}

//Test cases
console.log(reverseString("hello"));
console.log(reverseString("12345"));
console.log(reverseString(""));
console.log(reverseString(12345));


//Test cases for concise version
console.log(reverseStringConsise("hello"));
console.log(reverseStringConsise("12345"));
console.log(reverseStringConsise(""));
console.log(reverseStringConsise(12345));

