function reverseString(str) {
    //Split the string into an array of characters
    const charArray =str.split('');

    //Reverse the array of characters
    const  reversedArray =charArray.reverse();

    //Join the characters back into a string
    const reversedString=reversedArray.join('');

    //Return the reversed string
    return reversedString;
}

function reverseStringConsise(str) {
    return str.split('').reverse().join('');

}

//Test cases
console.log(reverseString("hello"));//Expected output: "olleh"
console.log(reverseString("12345"));//Expected output: "54321"
console.log(reverseString(""));//Expected output; ""

//Test cases for consice version
console.log(reverseStringConsise("hello"));//Expected output: "olleh"
console.log(reverseStringConsise(12345));//Expected output: "54321"
console.log(reverseStringConsise(""));//Expected output: ""