function reverseString(str){
    if(typeof str !== 'string') {
        return 'Error: Input must be a String';
    }
    return str.split('').reverse().join('');
}

function reverseStringConsise(str){
    if (typeof str !== 'string'){
        return 'Error: Input must be a String';
    }
    return str.split('').reverse().join('');
}

//Test cases
console.log(reverseString("hello")); //Expected output:"olleh"
console.log(reverseString("12345")); //Expected output:"54321"
console.log(reverseString("")); //Expected output: ""
console.log(reverseString(12345)); //Expected output:"Error: Input must be a string"



//Test cases for concise version
console.log(reverseStringConsise("hello")); //Expected output:"olleh"
console.log(reverseStringConsise("12345")); //Expected output:"54321"
console.log(reverseStringConsise("")); //Expected output: ""
console.log(reverseStringConsise(12345)); //Expected output:"Error: Input must be a string"
